import { Flex } from '@@components/FlexView';
import { ALL_DAY_OF_THE_WEEK } from '@@constants/date';
import CalendarHeaderItem from '@@components/CalendarHeader/CalendarHeaderItem';
import { CalendarHeaderProps } from '@@components/CalendarHeader/types';
import { View } from '@@components/View';
import { ASSETS } from '@@constants/assets';

function CalendarHeader({ ...props }: CalendarHeaderProps) {
  return (
    <Flex.Vertical style={{ height: 36 }} {...props}>
      <Flex.Horizontal style={{ height: 20 }}>
        {ALL_DAY_OF_THE_WEEK.map((day) => (
          <CalendarHeaderItem key={day} day={day} flex={1} />
        ))}
      </Flex.Horizontal>
      <View style={{ height: 2 }} marginVertical={7} background={ASSETS.COLORS.Neutural300} />
    </Flex.Vertical>
  );
}

export default CalendarHeader;
