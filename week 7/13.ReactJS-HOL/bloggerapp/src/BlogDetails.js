// src/BlogDetails.js
import React from 'react';

function BlogDetails({ blogs }) {
  if (!blogs?.length) return <p>No blogs available</p>;

  return (
    <div className="v1">
      <h1>Blog Details</h1>
      {blogs.map((blog) => (
        <div key={blog.id}>
          <h2>{blog.title}</h2>
          <h5>{blog.author}</h5>
          <p>{blog.content}</p>
        </div>
      ))}
    </div>
  );
}

export default BlogDetails;
