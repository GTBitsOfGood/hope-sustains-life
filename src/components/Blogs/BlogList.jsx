import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import BlogCard from "./BlogCard";
import styles from "./blog.module.css";

const BlogList = ({ blogs }) => {
    const [currentBlogs, setBlogs] = React.useState(blogs);
    
    return (<>
                {currentBlogs.map((blog, index) => (
                    <BlogCard
                        blog={blog}
                        key={blog._id}
                        index={index}
                    />
                ))}
            <BlogCard blog={"ha"}/>
            </>
    );
};

BlogList.propTypes = {
    blogs: PropTypes.array.isRequired,
};

export default BlogList;
