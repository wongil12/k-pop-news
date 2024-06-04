import { View } from 'react-native';
import styled from 'styled-components';
import { FlexViewProps } from '@@components/FlexView/types';
import { sizeValueGenerator } from '@@utils/style';

export const StyledFlexView = styled(View)<FlexViewProps & { flexDirection: 'column' | 'row' }>`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
  ${({ alignItems }) => (alignItems ? `align-items: ${alignItems};` : '')}
  ${({ justifyContent }) => (justifyContent ? `justify-content: ${justifyContent};` : '')}
  ${({ alignSelf }) => (alignSelf ? `align-self: ${alignSelf};` : '')}
  ${({ gap }) => (gap ? `gap: ${sizeValueGenerator(gap)};` : '')}
`;
