import React from "react";
import PropTypes from "prop-types";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

const InputField = ({
  label,
  inputType,
  placeholder,
  formFieldName,
  required,
  onChange,
}) => {
  return (
    <Form.Group as={Row} controlId={formFieldName}>
      <Form.Label column sm={4} className="text-right">
        {label} {required && <span className="text-danger"> *</span>}
      </Form.Label>
      <Col sm={8}>
        <Form.Control
          type={inputType}
          placeholder={placeholder}
          required={required}
          onChange={onChange}
        />
      </Col>
    </Form.Group>
  );
};

InputField.propTypes = {
  label: PropTypes.string,
  inputType: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  formFieldName: PropTypes.string.isRequired,
  required: PropTypes.bool,
  onChange: PropTypes.func,
};

export default InputField;
