import { FlexViewProps } from '@@components/FlexView/types';
import { Schedule } from '@@svc/schedule-svc/types';

export interface CalendarItemProps extends FlexViewProps {
  date: Date;
  scheduleList?: Schedule[];
  isPreview?: boolean;
}

export interface ScheduleItemProps extends FlexViewProps {
  schedule: Schedule;
}
