import { Text, TextProps } from 'react-native';
import styled from 'styled-components';

const StyledTitleSmallText = styled(Text)`
  font-family: 'Bold';
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.2px;
`;

export function TitleSmallText(props: TextProps) {
  return <StyledTitleSmallText {...props} />;
}
