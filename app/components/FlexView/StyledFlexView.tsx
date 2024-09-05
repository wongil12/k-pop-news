import styled from 'styled-components';
import { FlexViewProps } from '@@components/FlexView/types';
import { sizeValueGenerator } from '@@utils/style';
import { View } from '@@components/View';

export const StyledFlexView = styled(View)<FlexViewProps & { flexDirection: 'column' | 'row' }>`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
  ${({ full }) => full && 'height: 100%;'}
  ${({ alignItems }) => (alignItems ? `align-items: ${alignItems};` : '')}
  ${({ justifyContent }) => (justifyContent ? `justify-content: ${justifyContent};` : '')}
  ${({ alignSelf }) => (alignSelf ? `align-self: ${alignSelf};` : '')}
  ${({ gap }) => (gap ? `gap: ${sizeValueGenerator(gap)};` : '')}
  ${({ flex }) => (flex ? `flex: ${flex};` : '')}
  ${({ flexGrow }) => (flexGrow ? `flex-grow: ${flexGrow};` : '')}
  
  box-sizing: border-box;
`;
