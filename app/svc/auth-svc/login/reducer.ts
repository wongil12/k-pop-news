import { SERVICE } from '@@svc/constants';
import { createSlice, createAction, PayloadAction } from '@reduxjs/toolkit';
import { LoginState } from '@@svc/auth-svc/login/types';

const PREFIX = `${SERVICE.AUTH}/login`;

const initialState: LoginState = {
  token: null,
};

export const checkValidLoginEmailRequest = createAction<string>(`${PREFIX}/checkValidLoginEmailRequest`);
export const checkValidLoginEmailSuccess = createAction(`${PREFIX}/checkValidLoginEmailSuccess`);
export const checkValidLoginEmailFailure = createAction<string>(`${PREFIX}/checkValidLoginEmailFailure`);

export const loginRequest = createAction<{ email: string; password: string }>(`${PREFIX}/loginRequest`);
export const loginFailure = createAction<string>(`${PREFIX}/loginFailure`);

const loginSlice = createSlice({
  name: PREFIX,
  initialState,
  reducers: {
    loginSuccess(state, { payload }: PayloadAction<string>) {
      state.token = payload;
    },
  },
});

export const { loginSuccess } = loginSlice.actions;

export default loginSlice.reducer;
