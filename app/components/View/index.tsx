import { View as RNView } from 'react-native';
import styled from 'styled-components';
import { AdditionalViewProps, ViewProps } from '@@components/View/types';

const StyledView = styled(RNView)<AdditionalViewProps>`
  ${({ paddingHorizontal }) => (paddingHorizontal ? `padding: 0 ${paddingHorizontal};` : '')}
  ${({ paddingVertical }) => (paddingVertical ? `padding: ${paddingVertical} 0;` : '')}
  ${({ paddingTop }) => (paddingTop ? `padding-top: ${paddingTop};` : '')}
  ${({ paddingRight }) => (paddingRight ? `padding-right: ${paddingRight};` : '')}
  ${({ paddingBottom }) => (paddingBottom ? `padding-bottom: ${paddingBottom};` : '')}
  ${({ paddingLeft }) => (paddingLeft ? `padding-left: ${paddingLeft};` : '')}

  ${({ marginVertical }) => (marginVertical ? `margin: ${marginVertical} 0;` : '')}
  ${({ marginVertical }) => (marginVertical ? `margin: ${marginVertical} 0;` : '')}
  ${({ marginTop }) => (marginTop ? `margin-top: ${marginTop};` : '')}
  ${({ marginRight }) => (marginRight ? `margin-right: ${marginRight};` : '')}
  ${({ marginBottom }) => (marginBottom ? `margin-bottom: ${marginBottom};` : '')}
  ${({ marginLeft }) => (marginLeft ? `margin-left: ${marginLeft};` : '')}
`;

export function View(props: ViewProps) {
  return <StyledView {...props} />;
}
