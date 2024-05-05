import { Text, TextProps } from 'react-native';
import styled from 'styled-components';

const StyledBodySmallarText = styled(Text)`
  font-family: 'Bold';
  font-size: 10px;
  line-height: 16px;
`;

export function BodySmallarText(props: TextProps) {
  return <StyledBodySmallarText {...props} />;
}
