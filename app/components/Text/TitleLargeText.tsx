import { Text, TextProps } from 'react-native';
import styled from 'styled-components';

const StyledTitleLargeText = styled(Text)`
  font-family: 'PickAllBold';
  font-size: 18px;
  line-height: 24px;
`;

export function TitleLargeText(props: TextProps) {
  return <StyledTitleLargeText {...props} />;
}
