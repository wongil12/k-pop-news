import { Flex } from '@@components/FlexView';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Header from '@@pages/Home/parts/Header';
import CalendarList from '@@pages/Home/parts/CalendarList';
import CalendarCarousel from './parts/CalendarCarousel';

function Home() {
  const { top } = useSafeAreaInsets();

  return (
    <Flex.Vertical full paddingTop={top}>
      <Header />
      <CalendarList />
      <CalendarCarousel flexGrow={1} />
    </Flex.Vertical>
  );
}

export default Home;
