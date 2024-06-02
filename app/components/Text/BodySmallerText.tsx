import { Text, TextProps } from 'react-native';
import styled from 'styled-components';

const StyledBodySmallerText = styled(Text)`
  font-family: 'PickAllPretendardRegular';
  font-size: 10px;
  line-height: 16px;
`;

export function BodySmallerText(props: TextProps) {
  return <StyledBodySmallerText {...props} />;
}
