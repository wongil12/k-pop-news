import { checkValidLoginEmailFailure, checkValidLoginEmailRequest, checkValidLoginEmailSuccess } from '@@svc/auth-svc/login/reducer';
import { call, put, takeLatest } from 'redux-saga/effects';

const TEST_EMAIL = ['asdf@naver.com', 'asdf@asdf.com', 'asdf@asdf.asdf', 'a'];

interface CheckValidateResponse {
  ok: boolean;
}

const getEmail = (email: string): Promise<CheckValidateResponse> =>
  new Promise((res, rej) => {
    TEST_EMAIL.includes(email) ? res({ ok: true }) : rej(new Error('등록되지 않은 이메일이에요. 다시 확인 해주세요.'));
  });

function* checkValidLoginEmail({ payload }: ReturnType<typeof checkValidLoginEmailRequest>) {
  try {
    const response: CheckValidateResponse = yield call(getEmail, payload);

    const action = response.ok ? checkValidLoginEmailSuccess() : checkValidLoginEmailFailure('등록되지 않은 이메일이에요. 다시 확인 해주세요.');

    yield put(action);
  } catch (e) {
    yield put(checkValidLoginEmailFailure((e as Error).message));
  }
}

export default function* defaultSaga() {
  yield takeLatest(checkValidLoginEmailRequest.type, checkValidLoginEmail);
}
