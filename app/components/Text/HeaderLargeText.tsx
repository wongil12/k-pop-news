import { Text, TextProps } from 'react-native';
import styled from 'styled-components';

const StyledHeaderLargeText = styled(Text)`
  font-family: 'PickAllAsapBold';
  font-size: 36px;
  letter-spacing: -0.2px;
  line-height: 42px;
`;

export function HeaderLargeText(props: TextProps) {
  return <StyledHeaderLargeText {...props} />;
}
