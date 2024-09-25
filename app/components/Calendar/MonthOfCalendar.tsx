import { Flex } from '@@components/FlexView';
import { BodyMediumText } from '@@components/Text';
import { MonthOfCalendarProps } from '@@components/Calendar/types';
import { Dimensions } from 'react-native';
import { add, format, lastDayOfMonth, startOfMonth } from 'date-fns';
import CalendarItem from '@@components/CalendarItem';
import CalendarHeader from '@@components/CalendarHeader';

const VIEW_WIDTH = Dimensions.get('window').width;

const rendering = () => {};

function MonthOfCalendar({ date, ...props }: MonthOfCalendarProps) {
  const prevMonthDate = lastDayOfMonth(add(date, { months: -1 }));
  const nextMonthDate = startOfMonth(add(date, { months: 1 }));
  // 해당 월의 첫번째 요일 0: 월요일 ~ 6: 일요일
  const dayOfWeek = (date.getDay() === 0 ? 7 : date.getDay()) - 1;
  // 해당 월의 마지막 날짜
  const lastDateOfMonth = lastDayOfMonth(date).getDate();
  const lastDateOfPrevMonth = prevMonthDate.getDate();
  const lastDayOfPrevMonth = (prevMonthDate.getDay() === 0 ? 7 : prevMonthDate.getDay()) - 1;

  // 꽉 채우는 캘린더를 위한 개수 구하기(7의 배수로 나옴)
  const countOfCalendar = Math.ceil((lastDateOfMonth + dayOfWeek) / 7) * 7;

  const dateArray = Array.from({ length: countOfCalendar }, (_, index) => (index < dayOfWeek ? null : index - dayOfWeek + 1));
  const items = dateArray.reduce((prev, curr, currentIndex) => {
    const index = Math.floor(currentIndex / 7);
    if (!prev[index]) prev.push([curr]);
    else prev[index].push(curr);
    return prev;
  }, [] as Array<Array<number | null>>);

  return (
    <Flex.Vertical {...props} style={{ width: VIEW_WIDTH }} alignSelf='stretch'>
      <CalendarHeader />
      {items.map((week, wIndex) => (
        <Flex.Horizontal flex={1}>
          {week.map((date, index) => {
            const result = date === null ? lastDateOfPrevMonth + index - lastDayOfPrevMonth : date > lastDateOfMonth ? date - lastDateOfMonth : date;
            const isPreview = date === null || date > lastDateOfMonth;
            return <CalendarItem flex={1} scheduleList={[]} date={result} isPreview={isPreview} />;
          })}
        </Flex.Horizontal>
      ))}
    </Flex.Vertical>
  );
}

export default MonthOfCalendar;
