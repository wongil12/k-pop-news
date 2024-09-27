import { useState } from 'react';
import { Flex } from '@@components/FlexView';
import { CalendarProps } from '@@components/Calendar/types';
import { useCalendar } from '@@components/Calendar/hooks';
import MonthOfCalendar from '@@components/Calendar/MonthOfCalendar';
import SwiperFlatList from 'react-native-swiper-flatlist';

function Calendar({ ...props }: CalendarProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [targetDate, setTargetDate] = useState<Date>(new Date());
  const dateList = useCalendar(targetDate);

  return (
    <Flex.Horizontal {...props} marginTop={32} alignItems='stretch'>
      <SwiperFlatList horizontal data={dateList ?? []} renderItem={({ item }) => <MonthOfCalendar date={item} />} />
    </Flex.Horizontal>
  );
}

export default Calendar;
