import CalendarItem from '@@components/CalendarItem';
import { Flex } from '@@components/FlexView';
import { CalendarProps } from '@@components/Calendar/types';
import { FlatList } from 'react-native';
import { add, format } from 'date-fns';
import { BodySmallText } from '@@components/Text';
import { View } from '@@components/View';
import { useEffect, useRef, useState } from 'react';

function Calendar({ scheduleList, ...props }: CalendarProps) {
  const a = [1, 2, 3, 4, 5, 6];
  // const flatRef = useRef<FlatList<number>>(null);
  // const [data, setData] = useState<number[]>(Array.from({ length: 200 }, (_, index) => index + 1));

  // useEffect(() => {
  //   flatRef.current?.scrollToItem({
  //     animated: false,
  //     item: 100,
  //   });
  // }, []);

  // console.log(data);

  // return (
  //   <FlatList
  //     ref={flatRef}
  //     data={data}
  //     renderItem={({ item }) => <BodySmallText>{item}</BodySmallText>}
  //     showsVerticalScrollIndicator={false}
  //     onScroll={(e) => {
  //       if (e.nativeEvent.contentOffset.y < e.nativeEvent.contentSize.height / 4) {
  //         const a = [...data];
  //         setData(Array.from({ length: 100 }, (_, index) => index - 100 + 1).concat(a.slice(0, 100)));
  //       }
  //     }}
  //   />
  // );
  return (
    <Flex.Vertical {...props}>
      <Flex.Horizontal justifyContent='space-between'>
        {a.map((v) => (
          <CalendarItem flex={1} date={v} scheduleList={[]} />
        ))}
      </Flex.Horizontal>
      <Flex.Horizontal justifyContent='space-between'>
        {a.map((v) => (
          <CalendarItem flex={1} date={v} scheduleList={[]} />
        ))}
      </Flex.Horizontal>
    </Flex.Vertical>
  );
}

export default Calendar;
