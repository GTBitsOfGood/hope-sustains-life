import React from "react";
import PropTypes from "prop-types";
import { Draggable } from "react-beautiful-dnd";
import classes from "./blog.module.css";

const Blog = ({ id, index }) => (
  <Draggable draggableId={id} index={index}>
    {(provided) => (
      <div
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
      >
        <div className={classes.blogTableRow}>
          Placeholder for Blog table row {id} <br />
          <small>Need to add additional detail to match requirements</small>
        </div>
      </div>
    )}
  </Draggable>
);

Blog.propTypes = {
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default Blog;
