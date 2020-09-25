import React from "react";
import BlogTable from "../../components/Blogs/BlogTable";
// import axios from 'axios';

const getBlogs = () => {
  var sampleBlogList = [];
  //Make call to database pass into blog component and create a list of blogs
  //sample blog list to pass into table

  // axios.get('/api')
  //   .then((response) => {
  //     const data = response.data;
  //     sampleBlogList = data;
  //   })

  //Sample blog list for sprint 2
  
  for (var i = 0; i < 4; i++) {
    sampleBlogList.push({ id: i + "" });
  }

  return sampleBlogList;
};


const blogs = () => {
  var sampleBlogList = getBlogs();
  
  // Call table component which uses react beautiful DND
  return <BlogTable blogs={sampleBlogList} />;
};

export default blogs;
