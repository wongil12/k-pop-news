import { Button } from '@@components/Button';
import { Flex } from '@@components/FlexView';
import { TextInput } from '@@components/Input';
import { BodyMediumText } from '@@components/Text';
import { ASSETS } from '@@constants/assets';
import { useKeyboardWithAnimation } from '@@hooks/keyboard';
import { Animated, Keyboard, TextInput as RNTextInput, TouchableWithoutFeedback } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styled from 'styled-components';
import { useLoginFlow } from './hooks';
import { useSelector } from 'react-redux';
import { AppState } from '@@store/types';

const ForgetTextView = styled(BodyMediumText)`
  color: ${ASSETS.COLORS.Neutural600};
  align-self: flex-end;
`;

function Login() {
  const { bottom } = useSafeAreaInsets();
  const animatedKeyboardHeight = useKeyboardWithAnimation({ additionalValue: bottom, duration: 200, useNativeDriver: false });

  const a = useSelector((state: AppState) => {
    console.log('asdfasdf');
    console.log(state);
  });

  const { emailInputProps, passwordInputProps, buttonProps, showForgotEmail, isValidEmail } = useLoginFlow();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Flex.Vertical full paddingHorizontal={30}>
        <Flex.Vertical style={{ flexGrow: 1 }} justifyContent='center'>
          <Flex.Vertical gap={24}>
            <Flex.Vertical gap={20}>
              <TextInput {...emailInputProps} />
              {showForgotEmail && <ForgetTextView>이메일을 잊었나요?</ForgetTextView>}
            </Flex.Vertical>
            {isValidEmail && (
              <Flex.Vertical gap={20}>
                <TextInput {...passwordInputProps} />
                <ForgetTextView>비밀번호를 잊었나요?</ForgetTextView>
              </Flex.Vertical>
            )}
          </Flex.Vertical>
        </Flex.Vertical>
        <Animated.View style={{ marginBottom: animatedKeyboardHeight }}>
          <Button.Medium {...buttonProps}>다음</Button.Medium>
        </Animated.View>
      </Flex.Vertical>
    </TouchableWithoutFeedback>
  );
}

export default Login;
