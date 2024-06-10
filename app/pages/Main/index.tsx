import { Flex } from '@@components/FlexView';
import { TextInput } from '@@components/Input';
import { BodyMediumText, BodySmallText, HeaderLargeText } from '@@components/Text';
import { ASSETS } from '@@constants/assets';
import { SCREENS } from '@@constants/nav';
import { useNavigation } from '@@hooks/nav';
import { Image, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

function Main() {
  const navitation = useNavigation();

  const handleFocus = () => {
    Keyboard.dismiss();
    navitation.navigate(SCREENS.LOGIN);
  };

  return (
    <SafeAreaView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Flex.Vertical full>
          <Flex.Vertical style={{ flex: 1 }}>
            <Flex.Horizontal alignItems='flex-start' justifyContent='center' gap={52} paddingLeft={30} paddingRight={53} paddingTop={92}>
              <HeaderLargeText>It’s Time to{'\n'}Pickall</HeaderLargeText>
              <Image source={ASSETS.IMAGES.PickleCharacter} />
            </Flex.Horizontal>
            <Flex.Vertical paddingHorizontal={30} marginTop={16} gap={20}>
              <TextInput placeholder='이메일을 입력하세요' onFocus={handleFocus} />
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
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

export default Main;
