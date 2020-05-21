import React from 'react';
import { Link } from 'react-router-dom';

function PostList({ posts }) {
  return (
    <ul>
      {posts.map((item, i) => (
        <li key={item.id}>
          <Link to={`/posts/${item.id}`}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
}

export default PostList;
