import { Text, TextProps } from 'react-native';
import styled from 'styled-components';

const StyledBodyLargeText = styled(Text)`
  font-family: 'Regular';
  font-size: 16px;
  line-height: 22px;
  letter-spacing: -0.2px;
`;

export function BodyLargeText(props: TextProps) {
  return <StyledBodyLargeText {...props} />;
}
