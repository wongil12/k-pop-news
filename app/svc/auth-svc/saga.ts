import { all, call } from 'redux-saga/effects';

import loginSaga from '@@svc/auth-svc/login/saga';

export default function* defaultSaga() {
  yield all([call(loginSaga)]);
}
