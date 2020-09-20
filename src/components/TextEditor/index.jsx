import React from "react";
import dynamic from "next/dynamic";
import PropTypes from "prop-types";
import { formats, modules } from "./config";

const QuillWrapper = dynamic(import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

function TextEditor({ value, onChange }) {
  return (
    <QuillWrapper
      modules={modules}
      formats={formats}
      theme="snow"
      value={value}
      onChange={(val) => onChange(val)}
    />
  );
}

TextEditor.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

TextEditor.defaultProps = {
  value: "",
};

export default TextEditor;
