import { Flex } from '@@components/FlexView';
import { HeaderLargeText } from '@@components/Text';
import { IMAGES } from '@@constants/assets';
import { Image, SafeAreaView } from 'react-native';

function Home() {
  return (
    <SafeAreaView>
      <Flex.Vertical>
        <Flex.Horizontal alignItems='flex-start' justifyContent='center' gap={52} paddingLeft={30} paddingRight={53} paddingTop={92}>
          <HeaderLargeText>It’s Time to{'\n'}Pickall</HeaderLargeText>
          <Image source={IMAGES.PickleCharacter} />
        </Flex.Horizontal>
      </Flex.Vertical>
    </SafeAreaView>
  );
}

export default Home;
