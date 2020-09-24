import React from "react";
import PropTypes from "prop-types";
import { Draggable } from "react-beautiful-dnd";
import classes from "./blog.module.css";

const BlogTableRow = ({ id, index, date, headline }) => (
  <Draggable draggableId={id} index={index}>
    {(provided) => (
      <div
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
      >
        <div className={classes.blogTableRow}>
          <div style={{ marginRight: 90 }}>
            Placeholder for Blog table row {id} <br />
            {/* need to replace with headline */}
            <small>Need to add additional detail to match requirements</small>
          </div>
          <label style={{ marginRight: 110 }}>Enter date here</label>
          {/* need to replace with date */}
          <div className={classes.action}>
            <button className={classes.actionButtons}> View </button>
            <button className={classes.actionButtons}> Edit </button>
            <button className={classes.actionButtons}> Delete </button>
          </div>
        </div>
      </div>
    )}
  </Draggable>
);

BlogTableRow.propTypes = {
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default BlogTableRow;
