import dynamic from "next/dynamic";

export const QuillWrapper = dynamic(import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

// More formats available @ https://quilljs.com/docs/formats/
export const formats = [
  "bold",
  "font",
  "italic",
  "link",
  "size",
  "strike",
  "underline",
  "blockquote",
  "header",
  "indent",
  "list",
  "align",
  "image",
  "video",
];

// More modules @ https://quilljs.com/docs/modules/
export const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["clean"],
  ],
  clipboard: {
    matchVisual: false,
  },
};
