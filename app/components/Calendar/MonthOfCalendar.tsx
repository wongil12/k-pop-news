import { Flex } from '@@components/FlexView';
import { BodyMediumText } from '@@components/Text';
import { MonthOfCalendarProps } from '@@components/Calendar/types';
import { Dimensions } from 'react-native';
import { format, lastDayOfMonth } from 'date-fns';

const VIEW_WIDTH = Dimensions.get('window').width;

function MonthOfCalendar({ date, ...props }: MonthOfCalendarProps) {
  console.log(format(date, 'yyyyMMdd'), date.getDay());
  const dayOfWeek = (date.getDay() === 0 ? 7 : date.getDay()) - 1;
  const lastDateOfMonth = lastDayOfMonth(date).getDate();
  const countOfCalendar = Math.ceil((lastDateOfMonth + dayOfWeek) / 7) * 7;

  console.log(
    Array.from({ length: countOfCalendar }, (_, index) => {
      if (index < dayOfWeek) return null;
      return index - dayOfWeek;
    })
  );
  return (
    <Flex.Vertical {...props} style={{ width: VIEW_WIDTH }} alignSelf='stretch'>
      <BodyMediumText>{format(date, 'yyyyMMdd')}</BodyMediumText>
    </Flex.Vertical>
  );
}

export default MonthOfCalendar;
