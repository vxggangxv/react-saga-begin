import { takeEvery, call, put } from 'redux-saga/effects';
import { createAction, createReducer } from '@reduxjs/toolkit';
import { isString } from 'util';

export const SET_API_CALLING_STATUS = createAction(
  'app/SET_API_CALLING_STATUS',
);
export const CLEAR_API_CALLING_STATUS = createAction(
  'app/CLEAR_API_CALLING_STATUS',
);

export const SHOW_TOAST = createAction('SHOW_TOAST');
export const ADD_TOAST = createAction('ADD_TOAST');
export const REMOVE_TOAST = createAction('REMOVE_TOAST');

export const SHOW_DIALOG = createAction('SHOW_DIALOG');
export const CONFIRM_DIALOG = createAction('CONFIRM_DIALOG');
export const CANCEL_DIALOG = createAction('CANCEL_DIALOG');

const initialState = {
  apiCalling: false,
  toasts: [],
  dialog: undefined,
};

const appReducer = createReducer(initialState, {
  [SET_API_CALLING_STATUS]: (state, action) => {
    state.apiCalling = true;
  },
  [CLEAR_API_CALLING_STATUS]: (state, action) => {
    state.apiCalling = false;
  },
});

export function* appSaga() {
  yield takeEvery((action) => {
    if (isString(action.type)) {
      return action.type.endsWith('_REQUEST');
    }
  }, handleRequest);
  // yield takeEvery((action) => {
  //   if (isString(action.type)) {
  //     action.type.endsWith('_FAILURE');
  //   }
  // }, handleFailure);
}

function* handleRequest(action) {
  // console.log('handleRequest');
  yield put({ type: SET_API_CALLING_STATUS });
  // const { payload } = action;
  // if (isString(payload)) {
  // }
}

// function* handleFailure(action) {
//   const { payload } = action;
//   // console.log(payload);
//   if (isString(payload)) {
//     yield put({ type: SHOW_TOAST, payload });
//   }
// }

export default appReducer;
