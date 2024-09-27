import { useRef, useState } from 'react';
import { Flex } from '@@components/FlexView';
import { CalendarProps } from '@@components/Calendar/types';
import { useCalendar } from '@@components/Calendar/hooks';
import MonthOfCalendar from '@@components/Calendar/MonthOfCalendar';
import SwiperFlatList from 'react-native-swiper-flatlist';
import { SwiperFlatListRefProps } from 'react-native-swiper-flatlist/src/components/SwiperFlatList/SwiperFlatListProps';
import { Dimensions } from 'react-native';
import { useDispatch } from 'react-redux';
import { setCurrentDate } from '@@svc/schedule-svc/home/reducer';

const VIEW_WIDTH = Dimensions.get('window').width;

function Calendar({ ...props }: CalendarProps) {
  const dispatch = useDispatch();

  const flatListRef = useRef<SwiperFlatListRefProps>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [targetDate, setTargetDate] = useState<Date>(new Date());
  const dateList = useCalendar(targetDate);

  return (
    <Flex.Horizontal {...props} marginTop={32} alignItems='stretch'>
      <SwiperFlatList
        ref={flatListRef}
        horizontal
        data={dateList ?? []}
        renderItem={({ item }) => <MonthOfCalendar key={item} date={item} />}
        onScroll={(event) => {
          const contentOffsetX = event.nativeEvent.contentOffset.x;
          const index = Math.round(contentOffsetX / VIEW_WIDTH);
          dispatch(setCurrentDate(dateList?.[index] ?? new Date()));
        }}
      />
    </Flex.Horizontal>
  );
}

export default Calendar;
