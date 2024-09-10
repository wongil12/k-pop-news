import CalendarItem from '@@components/CalendarItem';
import { Flex } from '@@components/FlexView';
import { CalendarProps } from '@@components/Calendar/types';
import { FlatList } from 'react-native';
import { add, format } from 'date-fns';
import { BodySmallText } from '@@components/Text';
import { View } from '@@components/View';
import { useEffect, useRef, useState } from 'react';
import { useCalendar } from './hooks';

function Calendar({ scheduleList, ...props }: CalendarProps) {
  const flatRef = useRef<FlatList<Date>>(null);
  const [targetDate, setTargetDate] = useState<Date>(new Date());
  const dateList = useCalendar(targetDate);

  return (
    <FlatList
      horizontal
      ref={flatRef}
      data={dateList ?? []}
      renderItem={({ item }) => <BodySmallText>{item.getFullYear()}</BodySmallText>}
      showsHorizontalScrollIndicator={false}
      onScroll={(e) => {
        if (e.nativeEvent.contentOffset.y < e.nativeEvent.contentSize.height / 4) {
          // const a = [...data];
          // setData(Array.from({ length: 100 }, (_, index) => index - 100 + 1).concat(a.slice(0, 100)));
        }
      }}
    />
  );
  // return (
  //   <Flex.Vertical {...props}>
  //     <Flex.Horizontal justifyContent='space-between'>
  //       {a.map((v) => (
  //         <CalendarItem flex={1} date={v} scheduleList={[]} />
  //       ))}
  //     </Flex.Horizontal>
  //     <Flex.Horizontal justifyContent='space-between'>
  //       {a.map((v) => (
  //         <CalendarItem flex={1} date={v} scheduleList={[]} />
  //       ))}
  //     </Flex.Horizontal>
  //   </Flex.Vertical>
  // );
}

export default Calendar;
