import { usePrevious } from '@@hooks/commons';
import { add, format, set, startOfDay, startOfMonth } from 'date-fns';
import { useEffect, useState } from 'react';

// Target Date 기준 앞 뒤로 5년 단위로 불러옴.
export const useCalendar = (targetDate: Date) => {
  const prevTargetDate = usePrevious(targetDate);
  const [currentDate, setCurrentDate] = useState(targetDate);
  const [dateList, setDateList] = useState<Date[] | null>(null);

  useEffect(() => {
    if (prevTargetDate == targetDate) return;
    const fromDate = add(targetDate, {
      years: -5,
    });

    setDateList(
      Array.from({ length: 12 * 10 }, (_, index) =>
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
