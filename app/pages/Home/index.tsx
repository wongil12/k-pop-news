import { Flex } from '@@components/FlexView';
import { TextInput } from '@@components/Input';
import { HeaderLargeText } from '@@components/Text';
import { ASSETS } from '@@constants/assets';
import { Image, SafeAreaView } from 'react-native';

function Home() {
  return (
    <SafeAreaView>
      <Flex.Vertical>
        <Flex.Horizontal alignItems='flex-start' justifyContent='center' gap={52} paddingLeft={30} paddingRight={53} paddingTop={92}>
          <HeaderLargeText>It’s Time to{'\n'}Pickall</HeaderLargeText>
          <Image source={ASSETS.IMAGES.PickleCharacter} />
        </Flex.Horizontal>
        <Flex.Vertical>
          <TextInput placeholder='Hi everyone nice to meet you.' />
        </Flex.Vertical>
      </Flex.Vertical>
    </SafeAreaView>
  );
}

export default Home;
