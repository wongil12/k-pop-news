import { Text } from '@@components/Text/Text';
import { TextProps } from '@@components/Text/types';
import styled from 'styled-components';

const StyledTitleLargeText = styled(Text)`
  font-family: 'PickAllAsapBold';
  font-size: 18px;
  line-height: 24px;
`;

export function TitleLargeText(props: TextProps) {
  return <StyledTitleLargeText {...props} />;
}
