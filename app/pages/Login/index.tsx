import { Button } from '@@components/Button';
import { BUTTON_VARIANT } from '@@components/Button/constants';
import { Flex } from '@@components/FlexView';
import { TextInput } from '@@components/Input';
import { BodyMediumText } from '@@components/Text';
import { ASSETS } from '@@constants/assets';
import { useKeyboardWithAnimation } from '@@hooks/keyboard';
import { useActionSubscribe } from '@@store/middlewares/actionMiddleware';
import {
  checkValidLoginEmailFailure,
  checkValidLoginEmailRequest,
  checkValidLoginEmailSuccess,
  loginFailure,
  loginRequest,
  loginSuccess,
} from '@@svc/auth-svc/login/reducer';
import { getItem } from '@@utils/storage';
import { useEffect, useRef, useState } from 'react';
import { Animated, GestureResponderEvent, Keyboard, TextInput as RNTextInput, TouchableWithoutFeedback } from 'react-native';
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
  const [isValidEmail, setIsValidEmail] = useState<boolean>(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState<string | null>(null);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState<string | null>(null);

  const handlePressNext = () => {
    if (!isValidEmail) {
      dispatch(checkValidLoginEmailRequest(email));
    } else {
      dispatch(
        loginRequest({
          email,
          password,
        })
      );
    }
  };

  const handlePressEmailInput = () => {
    if (!isValidEmail) return;
    setIsValidEmail(false);
    setEmailErrorMessage(null);
    setPassword('');
    setTimeout(() => {
      emailRef.current?.focus();
    }, 500);
  };

  useActionSubscribe({
    type: checkValidLoginEmailSuccess.type,
    callback: () => {
      setIsValidEmail(true);
      setEmailErrorMessage(null);
      setTimeout(() => {
        passwordRef.current?.focus();
      }, 500);
    },
  });

  useActionSubscribe({
    type: checkValidLoginEmailFailure.type,
    callback: ({ payload }: ReturnType<typeof checkValidLoginEmailFailure>) => {
      setEmailErrorMessage(payload || null);
    },
  });

  useActionSubscribe({
    type: loginSuccess.type,
    callback: () => {
      // 로그인 성공 후 화면 전환 로직
    },
  });

  useActionSubscribe({
    type: loginFailure.type,
    callback: ({ payload }: ReturnType<typeof loginFailure>) => {
      setPasswordErrorMessage(payload || null);
    },
  });

  useEffect(() => {
    setTimeout(() => {
      emailRef.current?.focus();
    }, 500);
  }, []);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Flex.Vertical full paddingHorizontal={30}>
        <Flex.Vertical style={{ flexGrow: 1 }} justifyContent='center'>
          <Flex.Vertical gap={24}>
            <Flex.Vertical gap={20}>
              <TextInput
                ref={emailRef}
                value={email}
                onChangeText={setEmail}
                placeholder='이메일을 입력하세요'
                errorMessage={emailErrorMessage}
                readOnly={isValidEmail}
                onPress={handlePressEmailInput}
              />
              {!isValidEmail && !emailErrorMessage && <ForgetTextView>이메일을 잊었나요?</ForgetTextView>}
            </Flex.Vertical>
            {isValidEmail && (
              <Flex.Vertical gap={20}>
                <TextInput
                  secureTextEntry
                  ref={passwordRef}
                  value={password}
                  onChangeText={setPassword}
                  placeholder='비밀번호를 입력하세요'
                  errorMessage={passwordErrorMessage}
                />
                <ForgetTextView>비밀번호를 잊었나요?</ForgetTextView>
              </Flex.Vertical>
            )}
          </Flex.Vertical>
        </Flex.Vertical>
        <Animated.View style={{ marginBottom: animatedKeyboardHeight }}>
          <Button.Medium variant={BUTTON_VARIANT.SECONDARY} onPress={handlePressNext}>
            다음
          </Button.Medium>
        </Animated.View>
      </Flex.Vertical>
    </TouchableWithoutFeedback>
  );
}

export default Login;
