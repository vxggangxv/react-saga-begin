import * as postsAPI from '../../api/posts';
import { takeEvery, call, put } from 'redux-saga/effects';
import { createAction, createReducer } from '@reduxjs/toolkit';

export const SET_IF_FETCHING = createAction('posts/SET_IF_FETCHING');
export const SET_POSTS = createAction('posts/SET_POSTS');
export const REQUEST_POSTS = createAction('posts/REQUEST_POSTS');
export const RECEIVE_POSTS = createAction('posts/RECEIVE_POSTS');
export const FETCH_POSTS = createAction('posts/FETCH_POSTS');
// const GET_POST = createAction('GET_POST');
// const GET_POST_SUCCESS = createAction('GET_POST_SUCCESS');
// const GET_POST_ERROR = createAction('GET_POST_ERROR');

const initialState = {
  isFetching: false,
  posts: [],
  // isLoding: false,
  // post: {},
};

const postsReducer = createReducer(initialState, {
  [SET_POSTS]: (state, action) => {
    // console.log(action.payload);
    const posts = action.payload;
    state.posts.push(posts);
  },
  [SET_IF_FETCHING]: (state, action) => {
    // console.log(action.payload);
    // state.isFetching = false;
    // const posts = action.payload;
    // state.push(posts);
    state.isFetching = action.payload;
  },
});

function* fetchPostsSaga() {
  // console.log('fetchPostsSaga');
  // console.log(SET_IF_FETCHING);
  yield put({ type: SET_IF_FETCHING, payload: false });
  const posts = yield call(postsAPI.fetchPosts);
  yield put({ type: SET_POSTS, payload: posts });
  yield put({ type: SET_IF_FETCHING, payload: true });
  // // console.log(posts);
}

// 사가들을 합치기
export function* postsSaga() {
  yield takeEvery(FETCH_POSTS, fetchPostsSaga);
}

export default postsReducer;
