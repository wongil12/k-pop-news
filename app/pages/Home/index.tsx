import { Flex } from '@@components/FlexView';
import { HeaderLargeText } from '@@components/Text';
import { IMAGES } from '@@constants/assets';
import { Image, SafeAreaView, View } from 'react-native';

function Home() {
  return (
    <SafeAreaView>
      <Flex.Vertical>
        <Flex.Horizontal alignItems='center' gap={52}>
          <HeaderLargeText>It’s Time to Pickall</HeaderLargeText>
          <Image source={IMAGES.PickleCharacter} />
        </Flex.Horizontal>
      </Flex.Vertical>
    </SafeAreaView>
  );
}

export default Home;
