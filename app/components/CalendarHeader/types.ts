import { FlexViewProps } from '@@components/FlexView/types';
import { DayOfTheWeek } from '@@types/date';

export interface CalendarHeaderProps extends FlexViewProps {}

export interface CalendarHeaderItemProps extends FlexViewProps {
  day: DayOfTheWeek;
}
