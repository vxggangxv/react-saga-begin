import React, { useEffect } from 'react';
import PostList from '../components/PostList';
import { useSelector, useDispatch } from 'react-redux';
import { FETCH_POSTS_REQUEST } from '../store/modules/posts';

const PostListContainer = () => {
  const { apiCalling } = useSelector((state) => state.app);
  const { posts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FETCH_POSTS_REQUEST());
  }, [dispatch]);

  if (apiCalling) return <div>데이터 로딩중...</div>;
  return <PostList posts={posts} />;
};

export default PostListContainer;
