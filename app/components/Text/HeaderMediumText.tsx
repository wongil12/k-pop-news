import { Text, TextProps } from 'react-native';
import styled from 'styled-components';

const StyledHeaderMediumText = styled(Text)`
  font-family: 'PickAllAsapBold';
  font-size: 24px;
  line-height: 30px;
`;

export function HeaderMediumText(props: TextProps) {
  return <StyledHeaderMediumText {...props} />;
}
