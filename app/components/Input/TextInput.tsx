import { ForwardedRef, forwardRef, useState } from 'react';
import { NativeSyntheticEvent, TextInput as RNTextInput, TextInputFocusEventData } from 'react-native';
import styled from 'styled-components';
import { TextInputProps } from '@@components/Input/types';
import { ASSETS } from '@@constants/assets';

const StyledTextInput = styled(RNTextInput)<{ isFocus: boolean; hasValue: boolean }>`
  background: ${ASSETS.COLORS.Neutural050};
  border: 1px solid ${({ isFocus, hasValue }) => (isFocus || hasValue ? ASSETS.COLORS.Neutural800 : ASSETS.COLORS.Neutural400)};
  min-height: 42px;
  border-radius: 8px;
  padding: 0 16px;

  color: ${ASSETS.COLORS.Neutural900};
  font-family: 'PickAllPretendardRegular';
  font-size: 16px;
  line-height: 22px;
  letter-spacing: -0.2px;
`;

export const TextInput = forwardRef(({ onBlur, onFocus, value, ...props }: TextInputProps, ref) => {
  const [isFocus, setIsFocus] = useState<boolean>(false);

  const handleBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsFocus(false);
    onBlur?.(e);
  };

  const handleFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsFocus(true);
    onFocus?.(e);
  };

  return (
    <StyledTextInput
      {...props}
      ref={ref as ForwardedRef<RNTextInput>}
      placeholderTextColor={ASSETS.COLORS.Neutural400}
      isFocus={isFocus}
      hasValue={!!value?.length}
      onBlur={handleBlur}
      onFocus={handleFocus}
    />
  );
});
