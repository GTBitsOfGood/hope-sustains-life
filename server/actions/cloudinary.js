import cloudinary from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const generateSignature = (params_to_sign) => {
  return cloudinary.utils.api_sign_request(
    params_to_sign,
    process.env.CLOUDINARY_API_SECRET
  );
};

export const deleteImage = async (public_id) => {
  return cloudinary.v2.uploader.destroy(public_id, { invalidate: true });
};
