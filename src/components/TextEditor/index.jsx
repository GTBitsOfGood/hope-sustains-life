import React from "react";
import PropTypes from "prop-types";
import { QuillWrapper, formats, modules } from "./config";

const TextEditor = ({ value, onChange }) => {
  return (
    <QuillWrapper
      modules={modules}
      formats={formats}
      theme="snow"
      value={value}
      onChange={(val) => onChange(val)}
    />
  );
};

TextEditor.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

TextEditor.defaultProps = {
  value: "",
};

export default TextEditor;
