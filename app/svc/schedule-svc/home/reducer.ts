import { SERVICE } from '@@svc/constants';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HomeState } from '@@svc/schedule-svc/home/types';

const PREFIX = `${SERVICE.SCHEDULE}/home`;

const initialState: HomeState = {
  currentDate: new Date(),
};

export const homeSlice = createSlice({
  name: PREFIX,
  initialState: initialState,
  reducers: {
    setCurrentDate(state, { payload }: PayloadAction<Date>) {
      state.currentDate = payload;
    },
  },
});

export const { setCurrentDate } = homeSlice.actions;

export default homeSlice.reducer;
