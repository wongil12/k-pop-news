import { Flex } from '@@components/FlexView';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Header from '@@pages/Home/parts/Header';
import CalendarList from '@@pages/Home/parts/CalendarList';
import Calendar from '@@components/Calendar';

function Home() {
  const { top } = useSafeAreaInsets();

  return (
    <Flex.Vertical paddingTop={top}>
      <Header />
      <CalendarList />
      <Calendar scheduleList={[]} />
    </Flex.Vertical>
  );
}

export default Home;
