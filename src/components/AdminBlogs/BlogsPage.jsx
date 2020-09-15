import { reduceRight } from "lodash";
import React from "react";

const BlogsPage = () => {
  const [blogPosts, setBlogPosts] = React.useState([]);
  return (
    <div>
      <button style={{ marginLeft: 1000, marginRight: 10 }}>
        Save & Finish
      </button>
      <button> Publish </button>
      <h1 contentEditable="true" style={{ width: "100%", textAlign: "center" }}>
        [Insert Headline]
      </h1>
      <h4
        contentEditable="true"
        style={{ textAlign: "right", marginRight: 100 }}
      >
        Date
      </h4>
    </div>
  );
};
export default BlogsPage;
