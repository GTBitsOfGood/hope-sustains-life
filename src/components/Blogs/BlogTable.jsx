import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { toast } from "react-toastify";
import { reorderBlogs, deleteBlogById } from "../../actions/Blog";
import BlogTableRow from "./BlogTableRow";
import BlogDeleteModal from "./BlogDeleteModal";
import styles from "./blog.module.css";
import { Button } from "react-bootstrap";

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
    deleteBlogById(selectedBlog?.id)
      .then(() => {
        setShowModal(false);
        setBlogs(currentBlogs.filter((x) => x._id !== selectedBlog?.id));
        setSelectedBlog(null);
      })
      .catch((err) => {
        console.log(err);
      });
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
        <div style={{display: "flex", alignItems: "center"}}>
        <h4>
          Blogs/News
          </h4>
          <Link href="./blogs/new">
            <Button
              style={{
                backgroundColor: "#03AB99",
                border: "none",
                width: 150,
                height: 35,
                marginLeft: "auto",
              }}
            >
              Add
            </Button>
          </Link>
          </div>
        <br></br>
        <div style={{width: "100%"}}>
          <div className={styles.tableHeader}>
            <label style={{ marginLeft: "15%", marginRight: 284 }}>BLOGS</label>
            <label style={{ marginLeft: 120, marginRight: 100 }}>
              {" "}
              ACTIONS{" "}
            </label>
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
