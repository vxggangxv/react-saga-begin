import React, { useEffect } from 'react';
import PostList from '../components/PostList';
import { useSelector, useDispatch } from 'react-redux';
import { FETCH_POSTS } from '../store/modules/posts';

const PostListContainer = () => {
  const { isFetching, posts } = useSelector((state) => state.posts);
  // console.log(isFetching);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FETCH_POSTS());
  }, [dispatch]);

  console.log(isFetching);
  console.log(posts);

  // return <PostList />;
  return <PostList />;
};

export default PostListContainer;
