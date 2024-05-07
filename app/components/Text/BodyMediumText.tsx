import { Text, TextProps } from 'react-native';
import styled from 'styled-components';

const StyledBodyMediumText = styled(Text)`
  font-family: 'PickAllRegular';
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.2px;
`;

export function BodyMediumText(props: TextProps) {
  return <StyledBodyMediumText {...props} />;
}
