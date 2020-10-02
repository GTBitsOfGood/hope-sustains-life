import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";

const BlogDeleteModal = ({ show, onClose, onDelete, blogTitle }) => {
  return (
    <Modal show={show} centered onHide={onClose}>
      <Modal.Header closeButton>Confirm Delete</Modal.Header>
      <Modal.Body>
        <p>Are you sure you want to detete the blog</p>
        <p>Blog Placeholder {blogTitle}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="danger" onClick={onDelete}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

BlogDeleteModal.propTypes = {
  show: PropTypes.bool,
  onClose: PropTypes.func,
  onDelete: PropTypes.func,
  blogTitle: PropTypes.string,
};

export default BlogDeleteModal;
