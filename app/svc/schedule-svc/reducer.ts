import { SERVICE } from '@@svc/constants';
import { createSlice } from '@reduxjs/toolkit';
import homeReducer from '@@svc/schedule-svc/home/reducer';
import { ScheduleServiceState } from '@@svc/schedule-svc/types';
import { homeSlice } from '@@svc/schedule-svc/home/reducer';

const initialState: ScheduleServiceState = {
  home: homeSlice.getInitialState(),
};

const authSlice = createSlice({
  name: SERVICE.AUTH,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addDefaultCase((state, action) => {
      Object.assign(state.home, homeReducer(state.home, action));
    });
  },
});

export const {} = authSlice.actions;

export default authSlice.reducer;
