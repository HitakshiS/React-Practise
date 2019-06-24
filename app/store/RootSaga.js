import {put, takeEvery } from 'redux-saga/effects'
import ActionTypes from "./ActionTypes";
import {helloSaga} from "./Saga";

export function* rootSaga() {
  yield takeEvery(ActionTypes.ADD_VALUE, helloSaga);
}