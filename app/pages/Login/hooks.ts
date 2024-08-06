import { BUTTON_VARIANT } from '@@components/Button/constants';
import { useActionSubscribe } from '@@store/middlewares/actionMiddleware';
import {
  checkValidLoginEmailFailure,
  checkValidLoginEmailRequest,
  checkValidLoginEmailSuccess,
  loginFailure,
  loginRequest,
  loginSuccess,
} from '@@svc/auth-svc/login/reducer';
import { useEffect, useRef, useState } from 'react';
import { TextInput } from 'react-native';
import { useDispatch } from 'react-redux';

export const useLoginFlow = () => {
  const dispatch = useDispatch();

  const emailRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isValidEmail, setIsValidEmail] = useState<boolean>(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState<string | null>(null);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState<string | null>(null);

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

  const handlePressEmailInput = () => {
    if (!isValidEmail) return;

    setIsValidEmail(false);
    setEmailErrorMessage(null);
    setPassword('');

    setTimeout(() => {
      emailRef.current?.focus();
    }, 500);
  };

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

  const emailInputProps = {
    ref: emailRef,
    value: email,
    onChangeText: setEmail,
    placeholder: '이메일을 입력하세요',
    errorMessage: emailErrorMessage,
    readOnly: isValidEmail,
    onPress: handlePressEmailInput,
  };

  const passwordInputProps = {
    secureTextEntry: true,
    ref: passwordRef,
    value: password,
    onChangeText: setPassword,
    placeholder: '비밀번호를 입력하세요',
    errorMessage: passwordErrorMessage,
  };

  const buttonProps = {
    variant: BUTTON_VARIANT.SECONDARY,
    onPress: handlePressNext,
  };

  const showForgotEmail = !isValidEmail && !emailErrorMessage;

  return {
    emailInputProps,
    passwordInputProps,
    buttonProps,
    showForgotEmail,
    isValidEmail,
  };
};
