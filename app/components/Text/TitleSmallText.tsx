import { Text } from '@@components/Text/Text';
import { TextProps } from '@@components/Text/types';
import styled from 'styled-components';

const StyledTitleSmallText = styled(Text)`
  font-family: 'PickAllPretendardBold';
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.2px;
`;

export function TitleSmallText(props: TextProps) {
  return <StyledTitleSmallText {...props} />;
}
