import { Flex } from '@@components/FlexView';
import { BodyMediumText } from '@@components/Text';
import { DayOfTheWeek } from '@@types/date';
import { CalendarHeaderItemProps } from '@@components/CalendarHeader/types';
import { DAY_BY_STRING_KO } from '@@constants/date';
import { ASSETS } from '@@constants/assets';

function CalendarHeaderItem({ day, ...props }: CalendarHeaderItemProps) {
  return (
    <Flex.Horizontal {...props} justifyContent='center'>
      <BodyMediumText color={ASSETS.COLORS.Neutural600}>{DAY_BY_STRING_KO[day]}</BodyMediumText>
    </Flex.Horizontal>
  );
}

export default CalendarHeaderItem;
