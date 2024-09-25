import { FlexViewProps } from '@@components/FlexView/types';

export interface CalendarItemProps extends FlexViewProps {
  date: number;
  scheduleList?: Schedule[];
  isPreview?: boolean;
}

export interface CalendarLabelProps extends FlexViewProps {
  schedule: Schedule;
}

export interface Schedule {
  title: string;
  mainColor: string;
  subColor: string;
  fromDate: Date;
  toDate: Date;
}
