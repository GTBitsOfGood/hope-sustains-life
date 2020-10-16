import React, { useCallback, useMemo } from "react";
import PropTypes from "prop-types";
import { useDropzone } from "react-dropzone";
import Button from "react-bootstrap/Button";
import {
  baseStyle,
  activeStyle,
  acceptStyle,
  rejectStyle,
  imagePreview,
} from "./util";
import {
  showErrorNotification,
  showWarningNotification,
} from "../../../utils/notifications";

/**
 * Generic component to upload image.
 * Upon uploading the image, a preview is generated for the uploaded image.
 * It currently supports uploading 1 image file at a time.
 */
const ImageUploader = ({ uploadedImage, setUploadedImage }) => {
  const [uploading, setUploading] = React.useState(false);

  // callback function when the user drops image to the dropzone or uploads it
  const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
    if (acceptedFiles.length > 0) {
      showWarningNotification("Uploading a new image");
      const [file] = acceptedFiles; // a user can upload at most 1 image file
      const reader = new FileReader();

      reader.onloadstart = () => setUploading(true);
      reader.onloadend = () => setUploading(false);
      reader.onerror = () => {
        showErrorNotification("Failed to upload the image");
        setUploading(false);
      };
      reader.onabort = () => {
        showWarningNotification("Image upload was cancelled");
        setUploading(false);
      };

      reader.onload = () => {
        setUploadedImage(
          Object.assign(file, {
            tmpURL: URL.createObjectURL(file),
            imgBuffer: reader.result,
          })
        );
      };

      reader.readAsArrayBuffer(file);
    }

    // Show error message if uploading multiple images
    if (rejectedFiles.length > 1) {
      showErrorNotification("You can upload at most 1 file");
    } else if (rejectedFiles.length == 1) {
      // if file is too large
      if (rejectedFiles[0].file?.size > maxFileSize * 1024 * 1024) {
        showErrorNotification(`File is too large (${maxFileSize} MB Limit)`);
      } else {
        // Show any other error message while uploading the image
        const errorMessages = rejectedFiles[0].errors?.map(
          (err) => err.message
        );
        showErrorNotification(
          errorMessages.join(", ") || "Error uploading image"
        );
      }
    }
    setUploadedImage(null);
  }, []);

  const maxFileSize = 25; // in Megabytes
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    accept: "image/*",
    maxFiles: 1,
    onDrop,
    minSize: 0,
    maxSize: maxFileSize * 1024 * 1024,
  });

  // apply custom styling on different stages
  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject, isDragAccept]
  );

  const customDropZone = isDragActive ? (
    <p>Drop the files here ...</p>
  ) : (
    <>
      <p>Drag and drop image here</p>
      {uploading ? (
        <Button variant="primary" disabled>
          Uploading...
        </Button>
      ) : (
        <Button variant="success">Upload Image</Button>
      )}
    </>
  );

  return (
    <div className="my-3">
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        {uploadedImage?.tmpURL ? (
          <img src={uploadedImage.tmpURL} style={imagePreview} />
        ) : (
          customDropZone
        )}
      </div>
      {uploadedImage?.tmpURL && (
        <Button variant="danger" block onClick={() => setUploadedImage(null)}>
          Remove
        </Button>
      )}
    </div>
  );
};

ImageUploader.propTypes = {
  /** Callback function upon uploading an image.
   * The image object passed to it will have 'tmpURL' and 'imgBuffer' added to it.
   */
  setUploadedImage: PropTypes.func.isRequired,
  uploadedImage: PropTypes.shape({
    tmpURL: PropTypes.string, // Use URL.createObjectURL(imageFile) to generate URL if not available
    imgBuffer: PropTypes.string | PropTypes.object,
  }),
};

export default ImageUploader;
