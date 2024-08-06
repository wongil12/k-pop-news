import { SERVICE } from '@@svc/constants';
import { createSlice } from '@reduxjs/toolkit';
import { AuthServiceState } from '@@svc/auth-svc/types';
import loginReducer from '@@svc/auth-svc/login/reducer';

const initialState: AuthServiceState = {
  login: {
    token: null,
  },
};

const authSlice = createSlice({
  name: SERVICE.AUTH,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addDefaultCase((state, action) => {
      Object.assign(state.login, loginReducer(state.login, action));
    });
  },
});

export const {} = authSlice.actions;

export default authSlice.reducer;
