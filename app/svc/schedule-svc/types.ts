import { HomeState } from '@@svc/schedule-svc/home/types';

export interface Schedule {
  createUid: string;
  createdAt: Date;
  updateUid: string | null;
  updatedAt: Date | null;
  id: string;
  calendarId: string;
  title: string;
  content: string;
  color: string;
  startAt: Date;
  endAt: Date;
}

export interface ScheduleServiceState {
  schedulesByMonth: { [key: string]: Schedule[] }; // { 2024-05: Schedule[] } 형식
  home: HomeState;
}

export type SchedulesByMonth = { [key: string]: Schedule[] };
