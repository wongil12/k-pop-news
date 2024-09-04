import { FlexViewProps } from '@@components/FlexView/types';

export interface CalanderItemProps extends FlexViewProps {
  date: number;
  scheduleList?: Schedule[];
}

export interface CalanderLabelProps extends FlexViewProps {
  schedule: Schedule;
}

export interface Schedule {
  title: string;
  mainColor: string;
  subColor: string;
  fromDate: Date;
  toDate: Date;
}
