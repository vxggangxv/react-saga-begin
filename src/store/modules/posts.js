import * as api from '../../api/posts';
import { takeEvery, call, put } from 'redux-saga/effects';
import { createAction, createReducer } from '@reduxjs/toolkit';
import { CLEAR_API_CALLING_STATUS } from './app';

export const FETCH_POSTS_REQUEST = createAction('posts/FETCH_POSTS_REQUEST');
export const FETCH_POSTS_SUCCESS = createAction('posts/FETCH_POSTS_SUCCESS');
export const FETCH_POSTS_FAILURE = createAction('posts/FETCH_POSTS_FAILURE');
export const FETCH_POST_REQUEST = createAction('posts/FETCH_POST_REQUEST');
export const FETCH_POST_SUCCESS = createAction('posts/FETCH_POST_SUCCESS');
export const FETCH_POST_FAILURE = createAction('posts/FETCH_POST_FAILURE');

const initialState = {
  posts: [],
  post: {},
};

const postsReducer = createReducer(initialState, {
  [FETCH_POSTS_SUCCESS]: (state, action) => {
    state.posts = action.payload;
  },
  [FETCH_POST_SUCCESS]: (state, action) => {
    state.post = action.payload;
  },
});

export function* postsSaga() {
  yield takeEvery(FETCH_POSTS_REQUEST, fetchPostsSaga);
  yield takeEvery(FETCH_POST_REQUEST, fetchPostSaga);
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

function* fetchPostSaga(action) {
  const { payload } = action;
  if (!payload) return;
  try {
    const post = yield call(api.fetchPostById, payload);
    yield put({ type: FETCH_POST_SUCCESS, payload: post });
  } catch (err) {
    yield put({
      type: FETCH_POST_FAILURE,
      payload: '데이터를 불러오기에 실패했습니다.',
    });
  } finally {
    yield put({ type: CLEAR_API_CALLING_STATUS });
  }
}

export default postsReducer;
