import { Schedule } from '@@components/CalendarItem/types';
import { FlexViewProps } from '@@components/FlexView/types';

export interface CalendarProps extends FlexViewProps {
  scheduleList: Schedule[];
}
