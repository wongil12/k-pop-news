import { all, fork } from 'redux-saga/effects';

export function* rootSagas() {
  yield all([].map((saga) => fork(saga)));
}
