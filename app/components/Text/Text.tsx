import { TextProps } from '@@components/Text/types';
import { ASSETS } from '@@constants/assets';
import { Text as RNText } from 'react-native';
import styled from 'styled-components';

const StyledText = styled(RNText)<TextProps>`
  color: ${({ color }) => color ?? ASSETS.COLORS.Neutural900};
`;

export function Text(props: TextProps) {
  return <StyledText {...props} />;
}
