import { Flex } from '@@components/FlexView';
import { CalendarProps } from '@@components/Calendar/types';
import { FlatList } from 'react-native';
import { useRef, useState } from 'react';
import { useCalendar } from '@@components/Calendar/hooks';
import MonthOfCalendar from '@@components/Calendar/MonthOfCalendar';

function Calendar({ ...props }: CalendarProps) {
  const flatRef = useRef<FlatList<Date>>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [targetDate, setTargetDate] = useState<Date>(new Date());
  const dateList = useCalendar(targetDate);

  return (
    <Flex.Horizontal {...props} marginTop={32} alignItems='stretch'>
      <FlatList
        horizontal
        ref={flatRef}
        data={dateList ?? []}
        renderItem={({ item }) => <MonthOfCalendar date={item} />}
        // showsHorizontalScrollIndicator={false}
      />
    </Flex.Horizontal>
  );
}

export default Calendar;
