import { TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import { ButtonProps } from '@@components/Button/types';
import { BUTTON_VARIANT } from './constants';
import { ASSETS } from '@@constants/assets';
import { TitleSmallText } from '@@components/Text';
import { ReactNode } from 'react';

const StyledTouchableOpacity = styled(TouchableOpacity)<ButtonProps>`
  background: ${({ variant }) => (variant === BUTTON_VARIANT.PRIMARY ? ASSETS.COLORS.Primary : ASSETS.COLORS.Neutural800)};
  border-radius: 24px;
  padding: 12px 10px;
`;

const StyledText = styled(TitleSmallText)`
  text-align: center;
`;

export function StyledButton({ children, ...props }: ButtonProps) {
  return (
    <StyledTouchableOpacity {...props} activeOpacity={0.8}>
      <StyledText color={ASSETS.COLORS.Neutural050}>{children as ReactNode}</StyledText>
    </StyledTouchableOpacity>
  );
}
