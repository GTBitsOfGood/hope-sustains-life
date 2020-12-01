import React from "react";
import PropTypes from "prop-types";
import { Draggable } from "react-beautiful-dnd";
import Link from "next/link";
import classes from "./blog.module.css";
import { Button, Row, Col, Container } from "react-bootstrap";
import { publishBlog } from "../../actions/Blog";

const BlogTableRow = ({ blog, index, onDeleteClick }) => {
  const { _id, title, isPublished } = blog;
  const [published, setPublished] = React.useState(isPublished);
  const [isLoading, setLoading] = React.useState(false);

  const getItemStyle = (isDragging) => ({
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
    //paddingLeft: "150px",
    paddingRight: "0px",
    paddingTop: "20px",
    paddingBottom: "20px",
    margin: "auto",

    // styles we need to apply on draggables
    // ...draggableStyle
  });

  const publish = () => {
    setLoading(true);

    publishBlog(_id, !published)
      .then(() => {
        setPublished(!published);
      })
      .catch((error) => window.alert(error.message));

    setLoading(false);
  };

  return (
    <Draggable draggableId={blog._id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div style={getItemStyle(snapshot.isDragging)}>
		  <Container fluid>
		  <Row>
		  <Col xs={{ span: 2, offset: 1 }}>
            {title}
		  </Col>
		  <Col xs={{ span: 3, offset: 3 }}>
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
		  </Col>
		  <Col xs={{ span: 2, offset: 1 }}>
            <div>
              <Button
                className={classes.unpublishButton}
                disabled={isLoading}
                onClick={publish}
              >
                {isLoading ? "..." : published ? "Unpublish" : "Publish"}
              </Button>
            </div>
		  </Col>
		  </Row>
		  </Container>
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
