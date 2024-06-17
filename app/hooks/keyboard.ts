import { useEffect, useState } from 'react';
import { Animated, Keyboard, KeyboardEvent } from 'react-native';

export const useKeyboard = () => {
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  useEffect(() => {
    function onKeyboardDidShow(e: KeyboardEvent) {
      setKeyboardHeight(e.endCoordinates.height);
    }

    function onKeyboardDidHide() {
      setKeyboardHeight(0);
    }

    const showSubscription = Keyboard.addListener('keyboardWillShow', onKeyboardDidShow);
    const hideSubscription = Keyboard.addListener('keyboardWillHide', onKeyboardDidHide);

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return keyboardHeight;
};

export const useKeyboardWithAnimation = ({
  additionalValue,
  duration,
  useNativeDriver = true,
}: {
  additionalValue?: number;
  duration: number;
  useNativeDriver?: boolean;
}) => {
  const keyboardHeight = useKeyboard();
  const [animatedKeyboardHeight] = useState(new Animated.Value(0));

  useEffect(() => {
    animatedKeyboardHeight.stopAnimation();

    Animated.timing(animatedKeyboardHeight, {
      toValue: keyboardHeight + (additionalValue ?? 0),
      duration,
      useNativeDriver,
    }).start();
  }, [keyboardHeight]);

  return animatedKeyboardHeight;
};
