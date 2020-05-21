import React, { useEffect } from 'react';
import Post from '../components/Post';
import useReactRouter from 'use-react-router';
import { useSelector, useDispatch } from 'react-redux';
import { FETCH_POST_REQUEST } from '../store/modules/posts';

function PostContainer({ postId }) {
  const { history } = useReactRouter();

  const { apiCalling } = useSelector(state => state.app);
  const { post } = useSelector(state => state.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FETCH_POST_REQUEST(postId))
  }, [dispatch, postId])

  if (apiCalling) return <div>로딩중...</div>;
  return (
    <>
      <button onClick={() => history.push('/')}>홈으로 이동</button>
      <br />
      <Post post={post} />
    </>
  );
}

export default PostContainer;
