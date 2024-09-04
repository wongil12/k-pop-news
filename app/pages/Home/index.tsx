import { Flex } from '@@components/FlexView';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Header from '@@pages/Home/parts/Header';
import CalanderList from '@@pages/Home/parts/CalanderList';
import Calander from '@@components/Calander';

function Home() {
  const { top } = useSafeAreaInsets();

  return (
    <Flex.Vertical paddingTop={top}>
      <Header />
      <CalanderList />
      <Calander scheduleList={[]} />
    </Flex.Vertical>
  );
}

export default Home;
