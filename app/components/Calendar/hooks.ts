import { usePrevious } from '@@hooks/commons';
import { add, format, set, startOfDay, startOfMonth } from 'date-fns';
import { useEffect, useState } from 'react';

// Target Date 기준 앞 뒤로 10년 단위로 불러옴.
export const useCalendar = (targetDate: Date = startOfMonth(new Date())) => {
  const prevTargetDate = usePrevious(targetDate);
  const [currentDate, setCurrentDate] = useState(targetDate);
  const [dateList, setDateList] = useState<Date[] | null>(null);

  // useEffect(() => {
  //   if (prevTargetDate == targetDate) return;

  //   const fromDate = add(targetDate, {
  //     years: -10,
  //   });

  //   setDateList(
  //     Array.from({ length: 12 * 20 }, (_, index) => {
  //       return add(fromDate, {
  //         months: index,
  //       });
  //     })
  //   );
  // }, [targetDate]);

  useEffect(() => {
    if (prevTargetDate == targetDate) return;
    const fromDate = add(targetDate, {
      years: -10,
    });

    const a = Array.from({ length: 12 * 20 }, (_, index) => {
      return add(fromDate, {
        months: index,
      });
    });
    setDateList(a);
    console.log('b');
  }, [currentDate]);

  return dateList;
};
