import { View as RNView } from 'react-native';
import styled from 'styled-components';
import { AdditionalViewProps, ViewProps } from '@@components/View/types';
import { sizeValueGenerator } from '@@utils/style';

const StyledView = styled(RNView)<AdditionalViewProps>`
  ${({ paddingHorizontal }) => (paddingHorizontal ? `padding: 0 ${sizeValueGenerator(paddingHorizontal)};` : '')}
  ${({ paddingVertical }) => (paddingVertical ? `padding: ${paddingVertical} 0;` : '')}
  ${({ paddingTop }) => (paddingTop ? `padding-top: ${sizeValueGenerator(paddingTop)};` : '')}
  ${({ paddingRight }) => (paddingRight ? `padding-right: ${sizeValueGenerator(paddingRight)};` : '')}
  ${({ paddingBottom }) => (paddingBottom ? `padding-bottom: ${sizeValueGenerator(paddingBottom)};` : '')}
  ${({ paddingLeft }) => (paddingLeft ? `padding-left: ${sizeValueGenerator(paddingLeft)};` : '')}

  ${({ marginHorizontal }) => (marginHorizontal ? `margin: 0 ${sizeValueGenerator(marginHorizontal)};` : '')}
  ${({ marginVertical }) => (marginVertical ? `margin: ${sizeValueGenerator(marginVertical)} 0;` : '')}
  ${({ marginTop }) => (marginTop ? `margin-top: ${sizeValueGenerator(marginTop)};` : '')}
  ${({ marginRight }) => (marginRight ? `margin-right: ${sizeValueGenerator(marginRight)};` : '')}
  ${({ marginBottom }) => (marginBottom ? `margin-bottom: ${sizeValueGenerator(marginBottom)};` : '')}
  ${({ marginLeft }) => (marginLeft ? `margin-left: ${sizeValueGenerator(marginLeft)};` : '')}
  
  ${({ background }) => (background ? `background: ${sizeValueGenerator(background)};` : '')}
`;

export function View(props: ViewProps) {
  return <StyledView {...props} />;
}
