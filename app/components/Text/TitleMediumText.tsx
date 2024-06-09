import { Text } from '@@components/Text/Text';
import { TextProps } from '@@components/Text/types';
import styled from 'styled-components';

const StyledTitleMediumText = styled(Text)`
  font-family: 'PickAllPretendardBold';
  font-size: 18px;
  line-height: 22px;
  letter-spacing: -0.2px;
`;

export function TitleMediumText(props: TextProps) {
  return <StyledTitleMediumText {...props} />;
}
