import { Flex } from '@@components/FlexView';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Header from '@@pages/Home/parts/Header';
import CalanderList from '@@pages/Home/parts/CalanderList';

function Home() {
  const { top } = useSafeAreaInsets();

  return (
    <Flex.Vertical paddingTop={top}>
      <Header />
      <CalanderList />
    </Flex.Vertical>
  );
}

export default Home;
