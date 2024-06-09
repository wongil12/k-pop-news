import { Flex } from '@@components/FlexView';
import { TextInput } from '@@components/Input';
import { BodyMediumText, BodySmallText, HeaderLargeText } from '@@components/Text';
import { ASSETS } from '@@constants/assets';
import { useState } from 'react';
import { Image, SafeAreaView } from 'react-native';

function Main() {
  const [email, setEmail] = useState<string>('');
  return (
    <SafeAreaView>
      <Flex.Vertical full>
        <Flex.Vertical style={{ flex: 1 }}>
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
        <Flex.Vertical alignItems='center' gap={20} marginBottom={28}>
          <Image source={ASSETS.IMAGES.MainDivider} />
          <BodySmallText>다른 계정으로 간편하게 로그인해요</BodySmallText>
          <Flex.Horizontal gap={20}>
            <Image source={ASSETS.IMAGES.IconGoogle} />
            <Image source={ASSETS.IMAGES.IconKakao} />
            <Image source={ASSETS.IMAGES.IconNaver} />
            <Image source={ASSETS.IMAGES.IconApple} />
          </Flex.Horizontal>
        </Flex.Vertical>
      </Flex.Vertical>
    </SafeAreaView>
  );
}

export default Main;
