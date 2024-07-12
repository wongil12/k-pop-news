import { Button } from '@@components/Button';
import { BUTTON_VARIANT } from '@@components/Button/constants';
import { Flex } from '@@components/FlexView';
import { TextInput } from '@@components/Input';
import { BodyMediumText } from '@@components/Text';
import { ASSETS } from '@@constants/assets';
import { useKeyboard, useKeyboardWithAnimation } from '@@hooks/keyboard';
import { useActionSubscribe } from '@@store/middlewares/actionMiddleware';
import { checkValidLoginEmailFailure, checkValidLoginEmailRequest, checkValidLoginEmailSuccess } from '@@svc/auth-svc/login/reducer';
import { useEffect, useRef, useState } from 'react';
import { Animated, Keyboard, TextInput as RNTextInput, TouchableWithoutFeedback } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

const ForgetTextView = styled(BodyMediumText)`
  color: ${ASSETS.COLORS.Neutural600};
  align-self: flex-end;
`;

function Login() {
  const dispatch = useDispatch();

  const emailRef = useRef<RNTextInput>(null);
  const passwordRef = useRef<RNTextInput>(null);

  const { bottom } = useSafeAreaInsets();
  const animatedKeyboardHeight = useKeyboardWithAnimation({ additionalValue: bottom, duration: 200, useNativeDriver: false });

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  useEffect(() => {
    setTimeout(() => {
      emailRef.current?.focus();
      dispatch(checkValidLoginEmailRequest('judgevi52@gmal.com'));
    }, 500);
  }, []);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Flex.Vertical full paddingHorizontal={30} paddingTop={90}>
        <Flex.Vertical style={{ flexGrow: 1 }} gap={24}>
          <Flex.Vertical gap={20}>
            <TextInput ref={emailRef} value={email} onChangeText={setEmail} placeholder='이메일을 입력하세요' />
            {/* <ForgetTextView>이메일을 잊었나요?</ForgetTextView> */}
          </Flex.Vertical>
          <Flex.Vertical gap={20}>
            <TextInput secureTextEntry ref={passwordRef} value={password} onChangeText={setPassword} placeholder='비밀번호를 입력하세요' />
            <ForgetTextView>비밀번호를 잊었나요?</ForgetTextView>
          </Flex.Vertical>
        </Flex.Vertical>
        <Animated.View style={{ marginBottom: animatedKeyboardHeight }}>
          <Button.Medium variant={BUTTON_VARIANT.SECONDARY}>다음</Button.Medium>
        </Animated.View>
      </Flex.Vertical>
    </TouchableWithoutFeedback>
  );
}

export default Login;
