import React from "react";
import PropTypes from "prop-types";
import { Draggable } from "react-beautiful-dnd";
import Link from "next/link";
import classes from "./blog.module.css";

const BlogTableRow = ({ blog, index, onDeleteClick }) => {
  const { _id, title, date } = blog;
  return (
    <Draggable draggableId={blog._id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className={classes.blogTableRow}>
            <div style={{ marginRight: 120, width: 300 }}>{title}</div>
            <label style={{ marginRight: 90, width: 180 }}>
              {new Date(date).toLocaleDateString()}
            </label>
            <div className={classes.action}>
              <Link href={`/admin/blogs/${_id}`}>
                <button className={classes.actionButtons}> View </button>
              </Link>
              <Link href={`/admin/blogs/edit/${_id}`}>
                <button className={classes.actionButtons}> Edit </button>
              </Link>
              <button className={classes.actionButtons} onClick={onDeleteClick}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
};

BlogTableRow.propTypes = {
  blog: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};

export default BlogTableRow;
