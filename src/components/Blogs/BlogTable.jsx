import React from "react";
import PropTypes from "prop-types";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import Blog from "./Blog";

const reorder = (list, startIndex, endIndex) => {
  const newList = [...list];
  const [removed] = newList.splice(startIndex, 1);
  newList.splice(endIndex, 0, removed);

  return newList;
};

const BlogTable = ({ blogs }) => {
  const [currentBlogs, setBlogs] = React.useState(blogs);

  // callback function for when dropping a row
  const onDragEnd = (result) => {
    // The blog post was dropped outside of table
    if (!result.destination) return;
    // The blog post was dropped in the same position
    if (result.destination.index === result.source.index) return;

    // Need to reorder the blogs list in state upon valid drag-n-drop
    const newBlogs = reorder(
      currentBlogs,
      result.source.index,
      result.destination.index
    );

    setBlogs(newBlogs);
  };

  return (
    <div>
      <h1>Table Header</h1>

      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="blogTableBody">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {currentBlogs.map((blog, index) => (
                // TODO - Pass any relevant props for the Blog record
                <Blog id={blog.id} key={blog.id} index={index} />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      <h1>Footer (Pagination maybe?)</h1>
    </div>
  );
};

BlogTable.propTypes = {
  blogs: PropTypes.array.isRequired,
};

export default BlogTable;
