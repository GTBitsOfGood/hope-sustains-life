import React from "react";
import PropTypes from "prop-types";
import { Draggable } from "react-beautiful-dnd";
import Link from "next/link";
import classes from "./blog.module.css";
import { Button } from "react-bootstrap";

const BlogTableRow = ({ blog, index, onDeleteClick }) => {
  const { _id, title, date } = blog;
  const getItemStyle = (isDragging, draggableStyle) => ({
    // change background colour if dragging
    background: isDragging ? "lightgray" : "transparent",
    borderLeft: isDragging ? "8px solid #03AB99" : "transparent",
    borderBottom: "1px solid lightgray",
    alignItems: "center",
    display: "inline-flex",
    maxWidth: "1279px",
    maxHeight: "774px",
    width: "90%",
    height: "70%",
    paddingLeft: "150px",
    paddingRight: "0px",
    paddingTop: "20px",
    paddingBottom: "20px",
    margin: "auto",
  
    // styles we need to apply on draggables
    ...draggableStyle
  });


  return (
    <Draggable draggableId={blog._id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}>
            <div style={{ marginRight: 120, width: 300 }}>{title}</div>
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
            <div>
            <button className={classes.unpublishButton}>Unpublish</button>
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
