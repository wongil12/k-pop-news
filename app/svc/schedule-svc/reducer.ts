import { SERVICE } from '@@svc/constants';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import homeReducer from '@@svc/schedule-svc/home/reducer';
import { SchedulesByMonth, ScheduleServiceState } from '@@svc/schedule-svc/types';
import { homeSlice } from '@@svc/schedule-svc/home/reducer';
import { add } from 'date-fns';

const initialState: ScheduleServiceState = {
  schedulesByMonth: {
    '2024-10': [
      {
        createUid: '234-234123jsdafjfiefj',
        createdAt: new Date(),
        updateUid: null,
        updatedAt: null,
        id: 'id=123123',
        calendarId: '123',
        title: '김원길',
        content: 'Test Content',
        color: '#BEE2B3',
        startAt: new Date(),
        endAt: add(new Date(), { days: 2 }),
      },
    ],
  },
  home: homeSlice.getInitialState(),
};

const authSlice = createSlice({
  name: SERVICE.AUTH,
  initialState,
  reducers: {
    setSchedulesByMonth(state, { payload }: PayloadAction<SchedulesByMonth>) {
      state.schedulesByMonth = payload;
    },
  },
  extraReducers(builder) {
    builder.addDefaultCase((state, action) => {
      Object.assign(state.home, homeReducer(state.home, action));
    });
  },
});

export const { setSchedulesByMonth } = authSlice.actions;

export default authSlice.reducer;
