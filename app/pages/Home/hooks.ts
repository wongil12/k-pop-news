import { usePrevious } from '@@hooks/commons';
import { add, startOfMonth } from 'date-fns';
import { useEffect, useState } from 'react';

// Target Date 기준 앞 뒤로 2년 단위로 불러옴.
export const useCalendarCarousel = (targetDate: Date) => {
  const prevTargetDate = usePrevious(targetDate);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [currentDate, setCurrentDate] = useState(targetDate);
  const [dateList, setDateList] = useState<Date[] | null>(null);

  useEffect(() => {
    if (prevTargetDate == targetDate) return;
    const fromDate = add(targetDate, {
      years: -1,
    });

    setDateList(
      Array.from({ length: 12 * 2 }, (_, index) =>
        startOfMonth(
          add(fromDate, {
            months: index,
          })
        )
      )
    );
  }, [currentDate]);

  return dateList;
};
