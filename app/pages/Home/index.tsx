import { Flex } from '@@components/FlexView';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Header from '@@pages/Home/parts/Header';
import CalendarList from '@@pages/Home/parts/CalendarList';
import Calendar from '@@components/Calendar';
import { Schedule } from '@@components/CalendarItem/types';
import { add } from 'date-fns';

function Home() {
  const { top } = useSafeAreaInsets();

  const scheduleList: Schedule[] = [
    {
      title: '김원길',
      mainColor: '#BEE2B3',
      subColor: '#E97C5C',
      fromDate: new Date(),
      toDate: new Date(),
    },
    {
      title: '박유정',
      mainColor: '#BEE2B3',
      subColor: '#E97C5C',
      fromDate: add(new Date(), {
        days: 1,
      }),
      toDate: add(new Date(), {
        days: 1,
      }),
    },
    {
      title: '김진희',
      mainColor: '#BEE2B3',
      subColor: '#E97C5C',
      fromDate: add(new Date(), {
        days: 2,
      }),
      toDate: add(new Date(), {
        days: 2,
      }),
    },
    {
      title: '팽예영',
      mainColor: '#BEE2B3',
      subColor: '#E97C5C',
      fromDate: add(new Date(), {
        days: 3,
      }),
      toDate: add(new Date(), {
        days: 3,
      }),
    },
    {
      title: '박민희',
      mainColor: '#BEE2B3',
      subColor: '#E97C5C',
      fromDate: add(new Date(), {
        days: 4,
      }),
      toDate: add(new Date(), {
        days: 4,
      }),
    },
    {
      title: '김서연',
      mainColor: '#BEE2B3',
      subColor: '#E97C5C',
      fromDate: add(new Date(), {
        days: 5,
      }),
      toDate: add(new Date(), {
        days: 5,
      }),
    },
  ];

  return (
    <Flex.Vertical full paddingTop={top}>
      <Header />
      <CalendarList />
      <Calendar scheduleList={scheduleList} flexGrow={1} />
    </Flex.Vertical>
  );
}

export default Home;
