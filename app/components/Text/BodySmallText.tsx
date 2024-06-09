import { Text } from '@@components/Text/Text';
import { TextProps } from '@@components/Text/types';
import styled from 'styled-components';

const StyledBodySmallText = styled(Text)`
  font-family: 'PickAllPretendardRegular';
  font-size: 12px;
  line-height: 18px;
  letter-spacing: -0.2px;
`;

export function BodySmallText(props: TextProps) {
  return <StyledBodySmallText {...props} />;
}
