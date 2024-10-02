import Calendar from '@@components/Calendar';
import { Flex } from '@@components/FlexView';
import { useRef, useState } from 'react';
import SwiperFlatList from 'react-native-swiper-flatlist';
import { SwiperFlatListRefProps } from 'react-native-swiper-flatlist/src/components/SwiperFlatList/SwiperFlatListProps';
import { useDispatch } from 'react-redux';
import { useCalendarCarousel } from '@@pages/Home/hooks';
import { CalendarCarouselProps } from '@@pages/Home/types';
import { format } from 'date-fns';
import { VIEW_WIDTH } from '@@constants';
import { setCurrentDate } from '@@svc/schedule-svc/home/reducer';

function CalendarCarousel({ ...props }: CalendarCarouselProps) {
  const dispatch = useDispatch();

  const flatListRef = useRef<SwiperFlatListRefProps>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [targetDate, setTargetDate] = useState<Date>(new Date());
  const dateList = useCalendarCarousel(targetDate);

  return (
    <Flex.Horizontal {...props} marginTop={32} alignItems='stretch'>
      <SwiperFlatList
        ref={flatListRef}
        horizontal
        data={dateList ?? []}
        index={12}
        renderItem={({ item }: { item: Date }) => <Calendar key={format(item, 'yyyyMMdd')} date={item} />}
        onScroll={(event) => {
          const contentOffsetX = event.nativeEvent.contentOffset.x;
          const index = Math.round(contentOffsetX / VIEW_WIDTH);
          dispatch(setCurrentDate(dateList?.[index] ?? new Date()));
        }}
      />
    </Flex.Horizontal>
  );
}

export default CalendarCarousel;
