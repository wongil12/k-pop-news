import { SERVICE } from '@@svc/constants';
import { createSlice } from '@reduxjs/toolkit';
import { HomeState } from '@@svc/schedule-svc/home/types';

const PREFIX = `${SERVICE.SCHEDULE}/home`;

const initialState: HomeState = {
  selectedDate: {
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
  },
};

export const homeSlice = createSlice({
  name: PREFIX,
  initialState: initialState,
  reducers: {},
});

export default homeSlice.reducer;
