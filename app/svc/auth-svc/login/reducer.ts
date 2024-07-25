import { SERVICE } from '@@svc/constants';
import { createSlice, createAction } from '@reduxjs/toolkit';
import { LoginState } from '@@svc/auth-svc/login/types';

const PREFIX = `${SERVICE.AUTH}/login`;

const initialState: LoginState = {};

export const checkValidLoginEmailRequest = createAction<string>(`${PREFIX}/checkValidLoginEmailRequest`);
export const checkValidLoginEmailSuccess = createAction(`${PREFIX}/checkValidLoginEmailSuccess`);
export const checkValidLoginEmailFailure = createAction<string>(`${PREFIX}/checkValidLoginEmailFailure`);

export const loginRequest = createAction<{ email: string; password: string }>(`${PREFIX}/loginRequest`);
export const loginSuccess = createAction<string>(`${PREFIX}/loginSuccess`);
export const loginFailure = createAction<string>(`${PREFIX}/loginFailure`);

const loginSlice = createSlice({
  name: PREFIX,
  initialState,
  reducers: {},
});

export const {} = loginSlice.actions;

export default loginSlice.reducer;
