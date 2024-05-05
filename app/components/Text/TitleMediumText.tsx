import { Text, TextProps } from 'react-native';
import styled from 'styled-components';

const StyledTitleMediumText = styled(Text)`
  font-family: 'Bold';
  font-size: 18px;
  line-height: 22px;
  letter-spacing: -0.2px;
`;

export function TitleMediumText(props: TextProps) {
  return <StyledTitleMediumText {...props} />;
}
