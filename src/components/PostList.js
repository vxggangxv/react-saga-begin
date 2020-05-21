import React, { useEffect } from 'react';

function PostList({ posts }) {
  return (
    <ul>
      <br />
      {posts.map((item, i) => (
        <li key={i}>{item.title}</li>
      ))}
    </ul>
  );
}

export default PostList;
