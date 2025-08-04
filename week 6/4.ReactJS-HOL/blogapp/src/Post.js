import React from 'react';

class Post extends React.Component {
  render() {
    return (
      <div className="post" style={{ border: "1px solid #ccc", margin: "10px 0", padding: "10px" }}>
        <h3>{this.props.title}</h3>
        <p>{this.props.body}</p>
      </div>
    );
  }
}

export default Post;
