import { FlexViewProps } from '@@components/FlexView/types';
import { DayOfTheWeek } from '@@types/date';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface CalendarHeaderProps extends FlexViewProps {}

export interface CalendarHeaderItemProps extends FlexViewProps {
  day: DayOfTheWeek;
}
