import React from 'react';

const style = {
  fontSize: '30px',
  margin: '10px 0'
}

function Post({ post }) {
  const { title, body } = post;
  return (
    <>
      <h1 style={style}>{title}</h1>
      <p>{body}</p>
    </>
  );
}

export default Post;
