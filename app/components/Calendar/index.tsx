import CalendarItem from '@@components/CalendarItem';
import { Flex } from '@@components/FlexView';
import { CalendarProps } from '@@components/Calendar/types';
import { Dimensions, FlatList } from 'react-native';
import { add, format, startOfDay, startOfMonth } from 'date-fns';
import { BodySmallText } from '@@components/Text';
import { View } from '@@components/View';
import { useEffect, useRef, useState } from 'react';
import { useCalendar } from '@@components/Calendar/hooks';
import MonthOfCalendar from '@@components/Calendar/MonthOfCalendar';

function Calendar({ scheduleList, ...props }: CalendarProps) {
  const flatRef = useRef<FlatList<Date>>(null);
  const [targetDate, setTargetDate] = useState<Date>(new Date());
  const dateList = useCalendar(targetDate);

  return (
    <Flex.Horizontal {...props} alignItems='stretch'>
      <MonthOfCalendar date={startOfMonth(new Date())} />
      {/* <FlatList
        horizontal
        ref={flatRef}
        data={dateList ?? []}
        renderItem={({ item }) => <MonthOfCalendar date={item} />}
        // showsHorizontalScrollIndicator={false}
      /> */}
    </Flex.Horizontal>
  );
}

export default Calendar;
