import { Schedule } from '@@components/CalanderItem/types';
import { FlexViewProps } from '@@components/FlexView/types';

export interface CalanderProps extends FlexViewProps {
  scheduleList: Schedule[];
}
