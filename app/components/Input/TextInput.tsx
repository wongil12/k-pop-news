import { ForwardedRef, forwardRef, useState } from 'react';
import { NativeSyntheticEvent, TextInput as RNTextInput, TextInputFocusEventData } from 'react-native';
import styled from 'styled-components';
import { TextInputProps } from '@@components/Input/types';
import { ASSETS } from '@@constants/assets';
import { Flex } from '@@components/FlexView';
import ErrorMessage from './ErrorMessage';

const StyledTextInputBox = styled(Flex.Vertical)``;

const getBorderColor = ({ isFocus, hasValue, readOnly }: { isFocus: boolean; hasValue: boolean; readOnly?: boolean }) =>
  !readOnly && (isFocus || hasValue) ? ASSETS.COLORS.Neutural800 : ASSETS.COLORS.Neutural400;

const StyledTextInput = styled(RNTextInput)<{ isFocus: boolean; hasValue: boolean }>`
  background: ${ASSETS.COLORS.Neutural050};
  border: 1px solid ${({ isFocus, hasValue, readOnly }) => getBorderColor({ isFocus, hasValue, readOnly })};
  min-height: 42px;
  border-radius: 8px;
  padding: 0 16px;

  color: ${({ readOnly }) => (readOnly ? ASSETS.COLORS.Neutural600 : ASSETS.COLORS.Neutural900)};
  font-family: 'PickAllPretendardRegular';
  font-size: 16px;
  line-height: 22px;
  letter-spacing: -0.2px;
`;

export const TextInput = forwardRef(({ onBlur, onFocus, value, errorMessage, errorWithIcon = true, readOnly, ...props }: TextInputProps, ref) => {
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
    <StyledTextInputBox gap={12}>
      <StyledTextInput
        {...props}
        readOnly={readOnly}
        ref={ref as ForwardedRef<RNTextInput>}
        placeholderTextColor={ASSETS.COLORS.Neutural400}
        isFocus={isFocus}
        hasValue={!!value?.length}
        onBlur={handleBlur}
        onFocus={handleFocus}
      />
      {errorMessage && <ErrorMessage withIcon={errorWithIcon}>{errorMessage}</ErrorMessage>}
    </StyledTextInputBox>
  );
});
