import {
  checkValidLoginEmailFailure,
  checkValidLoginEmailRequest,
  checkValidLoginEmailSuccess,
  loginRequest,
  loginSuccess,
  loginFailure,
} from '@@svc/auth-svc/login/reducer';
import { setItem } from '@@utils/storage';
import { call, put, takeLatest } from 'redux-saga/effects';

const TEST_EMAIL = ['asdf@naver.com', 'asdf@asdf.com', 'asdf@asdf.asdf', 'a'];
const TEST_USER = [
  {
    email: TEST_EMAIL[0],
    password: '1234',
    token: 'asdf234234asdfsadf234234',
  },
  {
    email: TEST_EMAIL[1],
    password: '1234',
    token: 'qwer2343293werkd==',
  },
  {
    email: TEST_EMAIL[2],
    password: '1234',
    token: 'iejfosdlfkief23343',
  },
  {
    email: TEST_EMAIL[3],
    password: '1234',
    token: 'zxcvnldkdj49023lkdflk',
  },
];

interface CheckValidateResponse {
  ok: boolean;
}

interface LoginResponse {
  ok: boolean;
  token: string;
}

const getEmail = (email: string): Promise<CheckValidateResponse> =>
  new Promise((res, rej) => {
    TEST_EMAIL.includes(email) ? res({ ok: true }) : rej(new Error('등록되지 않은 이메일이에요. 다시 확인 해주세요.'));
  });

const dummyLogin = ({ email, password }: { email: string; password: string }): Promise<LoginResponse> =>
  new Promise((res, rej) => {
    const findUser = TEST_USER.find((user) => user.email === email);
    if (!findUser || findUser.password !== password) {
      rej(new Error('비밀번호 틀림ㅋ'));
    } else {
      res({
        ok: true,
        token: findUser.token,
      });
    }
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

function* login({ payload: { email, password } }: ReturnType<typeof loginRequest>) {
  try {
    const response: LoginResponse = yield call(dummyLogin, { email, password });

    let action = response.ok ? loginSuccess(response.token) : loginFailure('비밀번호 틀림ㅋ');

    if (response.ok) {
      const isSuccess: boolean = yield call(setItem, 'token', response.token);
      if (!isSuccess) {
        action = loginFailure('모종의 이유로 로그인 실패ㅜㅜ');
      }
    }

    yield put(action);
  } catch (e) {
    yield put(loginFailure((e as Error).message));
  }
}

export default function* defaultSaga() {
  yield takeLatest(checkValidLoginEmailRequest.type, checkValidLoginEmail);
  yield takeLatest(loginRequest.type, login);
}
