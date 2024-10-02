import { add, lastDayOfMonth, set, startOfMonth } from 'date-fns';

export const useCalendar = (date: Date) => {
  const currentDate = startOfMonth(date);
  const prevDate = lastDayOfMonth(add(currentDate, { months: -1 }));
  const afterDate = startOfMonth(add(currentDate, { months: 1 }));
  // 당월이 시작하는 요일 0: 월요일 ~ 6: 일요일
  const firstDayOfCurrentDate = (currentDate.getDay() === 0 ? 7 : currentDate.getDay()) - 1;
  // 당월의 마지막 날짜
  const lastDateOfCurrentDate = lastDayOfMonth(currentDate).getDate();
  const lastDateOfPrevDate = prevDate.getDate();
  const lastDayOfPrevDate = (prevDate.getDay() === 0 ? 7 : prevDate.getDay()) - 1;

  // 캘린더 아이템의 갯수 구하기(최소 5주)
  const countOfCalendar = Math.max(Math.ceil((lastDateOfCurrentDate + firstDayOfCurrentDate) / 7) * 7, 7 * 5);

  return Array.from(
    {
      length: countOfCalendar,
    },
    (_, index) => {
      // 전월의 날짜
      if (index < firstDayOfCurrentDate) {
        return set(prevDate, { date: lastDateOfPrevDate + index - lastDayOfPrevDate });
      }
      const date = index - firstDayOfCurrentDate + 1;
      // 익월의 날짜
      if (date > lastDateOfCurrentDate) {
        return set(afterDate, { date: date - lastDateOfCurrentDate });
      }

      return set(currentDate, { date });
    }
  ).reduce((prev, curr, currentIndex) => {
    const index = Math.floor(currentIndex / 7);
    if (!prev[index]) prev.push([curr]);
    else prev[index].push(curr);
    return prev;
  }, [] as Array<Date[]>);
};
