import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { toast } from "react-toastify";
import { reorderBlogs } from "../../actions/Blog";
import BlogTableRow from "./BlogTableRow";
import BlogDeleteModal from "./BlogDeleteModal";
import styles from "./blog.module.css";

const reorder = (list, startIndex, endIndex) => {
  const newList = [...list];
  const [removed] = newList.splice(startIndex, 1);
  newList.splice(endIndex, 0, removed);

  return newList;
};

const BlogTable = ({ blogs }) => {
  const [currentBlogs, setBlogs] = React.useState(blogs);
  const [showModal, setShowModal] = React.useState(false);
  const [selectedBlog, setSelectedBlog] = React.useState();

  const closeModal = () => {
    setShowModal(false);
    setSelectedBlog(null);
  };

  const showDeleteModal = ({ id, title }) => {
    setShowModal(true);
    setSelectedBlog({ id, title });
  };

  const deleteSelectedBlog = () => {
    // TODO - Replace with actual call to delete blog
    setShowModal(false);
    setBlogs(currentBlogs.filter((x) => x._id !== selectedBlog?.id));
    setSelectedBlog(null);
  };

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

    // Retrieve the blog id and their new order index
    const newBlogOrderIndexes = newBlogs.map((blog, index) => {
      return {
        id: blog._id,
        orderIndex: index,
      };
    });

    // Send backend request to reorder blogs in the database
    reorderBlogs(newBlogOrderIndexes)
      .then(() =>
        toast.success("Successfully reordered the blogs list", {
          position: "bottom-right",
          autoClose: 2000,
          closeOnClick: true,
          draggable: true,
        })
      )
      .catch(() =>
        toast.error("Failed to save the new order for blogs", {
          position: "bottom-right",
          autoClose: 2000,
          closeOnClick: true,
          draggable: true,
        })
      );

    setBlogs(newBlogs);
  };

  return (
    <div>
      <BlogDeleteModal
        show={showModal}
        onClose={closeModal}
        onDelete={deleteSelectedBlog}
        blogTitle={selectedBlog?.title}
      />

      <div className={styles.blogTable}>
        <h4>
          Blogs/News
          <Link href="./blogs/new">
            <button
              style={{
                marginLeft: "75%",
                backgroundColor: "#03AB99",
                border: "none",
                width: 90,
                height: 35,
              }}
            >
              Add
            </button>
          </Link>
        </h4>
        <br></br>
        <div>
          <div className={styles.tableHeader}>
            <label style={{ marginLeft: "15%", marginRight: 284}}>BLOGS</label>
            <label style={{ marginLeft: 120, marginRight: 100 }}> ACTIONS </label>
          </div>
          <div className={styles.tableContents}>
            <DragDropContext onDragEnd={onDragEnd}>
              <Droppable droppableId="blogTableBody">
                {(provided) => (
                  <div ref={provided.innerRef} {...provided.droppableProps}>
                    {currentBlogs.map((blog, index) => (
                      <BlogTableRow
                        blog={blog}
                        key={blog._id}
                        index={index}
                        onDeleteClick={() =>
                          showDeleteModal({
                            id: blog._id,
                            title: blog.title,
                          })
                        }
                      />
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          </div>
        </div>
      </div>
    </div>
  );
};

BlogTable.propTypes = {
  blogs: PropTypes.array.isRequired,
};

export default BlogTable;
