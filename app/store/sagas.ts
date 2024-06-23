import { all, fork } from 'redux-saga/effects';
import authSvcSaga from '@@svc/auth-svc/saga';

export function* rootSagas() {
  yield all([authSvcSaga].map((saga) => fork(saga)));
}
