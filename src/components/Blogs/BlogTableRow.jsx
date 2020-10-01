import React from "react";
import PropTypes from "prop-types";
import { Draggable } from "react-beautiful-dnd";
import classes from "./blog.module.css";

const BlogTableRow = ({ id, index, onDeleteClick }) => (
  <Draggable draggableId={id} index={index}>
    {(provided) => (
      <div
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
      >
        <div className={classes.blogTableRow}>
          <div style={{ marginRight: 120, width: 300 }}>
            Header goes here {id} <br />
            {/* need to replace with title from blog object*/}
            <small>Need to add additional detail to match requirements</small>
          </div>
          <label style={{ marginRight: 90, width: 180 }}>Enter date here</label>
          {/* need to replace with date from blog object*/}
          <div className={classes.action}>
            <button className={classes.actionButtons}> View </button>
            <button className={classes.actionButtons}> Edit </button>
            <button className={classes.actionButtons} onClick={onDeleteClick}>
              Delete
            </button>
          </div>
        </div>
      </div>
    )}
  </Draggable>
);

BlogTableRow.propTypes = {
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};

export default BlogTableRow;
