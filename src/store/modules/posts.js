import * as api from '../../api/posts';
import { takeEvery, call, put } from 'redux-saga/effects';
import { createAction, createReducer } from '@reduxjs/toolkit';
import { CLEAR_API_CALLING_STATUS } from './app';

export const FETCH_POSTS_REQUEST = createAction('posts/FETCH_POSTS_REQUEST');
export const FETCH_POSTS_SUCCESS = createAction('posts/FETCH_POSTS_SUCCESS');
export const FETCH_POSTS_FAILURE = createAction('posts/FETCH_POSTS_FAILURE');
// export const SET_IF_FETCHING = createAction('posts/SET_IF_FETCHING');
// export const SET_POSTS = createAction('posts/SET_POSTS');
// const GET_POST = createAction('GET_POST');
// const GET_POST_SUCCESS = createAction('GET_POST_SUCCESS');
// const GET_POST_ERROR = createAction('GET_POST_ERROR');

const initialState = {
  apiCalling: false,
  toasts: [],
  posts: [],
  // isLoding: false,
  // post: {},
};

const postsReducer = createReducer(initialState, {
  [FETCH_POSTS_SUCCESS]: (state, action) => {
    state.posts = action.payload;
  },
});

export function* postsSaga() {
  yield takeEvery(FETCH_POSTS_REQUEST, fetchPostsSaga);
}

function* fetchPostsSaga() {
  try {
    const posts = yield call(api.fetchPosts);
    yield put({ type: FETCH_POSTS_SUCCESS, payload: posts });
  } catch (err) {
    yield put({
      type: FETCH_POSTS_FAILURE,
      payload: '데이터를 불러오기에 실패했습니다.',
    });
  } finally {
    yield put({ type: CLEAR_API_CALLING_STATUS });
  }
}
export default postsReducer;
