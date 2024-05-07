import { Text, TextProps } from 'react-native';
import styled from 'styled-components';

const StyledBodySmallText = styled(Text)`
  font-family: 'PickAllRegular';
  font-size: 12px;
  line-height: 18px;
  letter-spacing: -0.2px;
`;

export function BodySmallText(props: TextProps) {
  return <StyledBodySmallText {...props} />;
}
