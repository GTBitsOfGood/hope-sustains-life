import React from "react";
import BlogTable from "../../components/Blogs/BlogTable";

const blogs = () => {
  // Add button that links to admin/blogs/new.jsx to the right of the header

  //Make call to database pass into blog component and create a list of blogs
  //sample blog list to pass into table

  //Sample blog list for sprint 2
  var sampleBlogList = [];
  for (var i = 0; i < 4; i++) {
    sampleBlogList.push({ id: i + "" });
  }

  // Call table component which uses react beautiful DND
  return <BlogTable blogs={sampleBlogList} />;
};

export default blogs;
