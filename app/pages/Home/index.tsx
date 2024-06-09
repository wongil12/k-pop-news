import { Flex } from '@@components/FlexView';
import { TextInput } from '@@components/Input';
import { BodyMediumText, HeaderLargeText } from '@@components/Text';
import { ASSETS } from '@@constants/assets';
import { useState } from 'react';
import { Image, SafeAreaView } from 'react-native';

function Home() {
  const [email, setEmail] = useState<string>('');
  return (
    <SafeAreaView>
      <Flex.Vertical>
        <Flex.Horizontal alignItems='flex-start' justifyContent='center' gap={52} paddingLeft={30} paddingRight={53} paddingTop={92}>
          <HeaderLargeText>It’s Time to{'\n'}Pickall</HeaderLargeText>
          <Image source={ASSETS.IMAGES.PickleCharacter} />
        </Flex.Horizontal>
        <Flex.Vertical paddingHorizontal={30} marginTop={16} gap={20}>
          <TextInput placeholder='이메일을 입력하세요' value={email} onChangeText={(text) => setEmail(text)} />
          <Flex.Horizontal justifyContent='space-between'>
            <BodyMediumText color={ASSETS.COLORS.Neutural600}>회원가입</BodyMediumText>
            <BodyMediumText color={ASSETS.COLORS.Neutural600}>가입한 정보를 잊었나요?</BodyMediumText>
          </Flex.Horizontal>
        </Flex.Vertical>
      </Flex.Vertical>
    </SafeAreaView>
  );
}

export default Home;
