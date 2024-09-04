import { Flex } from '@@components/FlexView';
import { BodySmallerText } from '@@components/Text';
import { View } from '@@components/View';
import styled from 'styled-components';
import { CalanderLabelProps } from '@@components/CalanderItem/types';

const StyledCalanderLabel = styled(Flex.Horizontal)`
  border-radius: 2px;
  overflow: hidden;
`;

const StyledLabelMarker = styled(View)`
  width: 3px;
`;

const StyledLabelTextView = styled(Flex.Horizontal)`
  flex: 1;
`;

const StyledLabelTex = styled(BodySmallerText)`
  font-family: 'PickAllPretendardBold';
  flex: 1;
  text-align: center;
`;

function CalanderLabel({ schedule }: CalanderLabelProps) {
  const { title, mainColor, subColor } = schedule;
  return (
    <StyledCalanderLabel>
      <StyledLabelMarker background={subColor} />
      <StyledLabelTextView background={mainColor}>
        <StyledLabelTex numberOfLines={1} ellipsizeMode='clip'>
          {title}
        </StyledLabelTex>
      </StyledLabelTextView>
    </StyledCalanderLabel>
  );
}

export default CalanderLabel;
