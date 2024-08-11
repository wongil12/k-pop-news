import { Flex } from '@@components/FlexView';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Header from '@@pages/Home/parts/Header';

function Home() {
  const { top } = useSafeAreaInsets();

  return (
    <Flex.Vertical paddingTop={top}>
      <Header />
    </Flex.Vertical>
  );
}

export default Home;
