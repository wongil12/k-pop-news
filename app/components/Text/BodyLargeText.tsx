import { Text } from '@@components/Text/Text';
import { TextProps } from '@@components/Text/types';
import styled from 'styled-components';

const StyledBodyLargeText = styled(Text)`
  font-family: 'PickAllPretendardRegular';
  font-size: 16px;
  line-height: 22px;
  letter-spacing: -0.2px;
`;

export function BodyLargeText(props: TextProps) {
  return <StyledBodyLargeText {...props} />;
}
