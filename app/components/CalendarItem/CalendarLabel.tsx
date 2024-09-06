import { Flex } from '@@components/FlexView';
import { BodySmallerText } from '@@components/Text';
import { View } from '@@components/View';
import styled from 'styled-components';
import { CalendarLabelProps } from '@@components/CalendarItem/types';

const StyledCalendarLabel = styled(Flex.Horizontal)`
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

function CalendarLabel({ schedule }: CalendarLabelProps) {
  const { title, mainColor, subColor } = schedule;
  return (
    <StyledCalendarLabel>
      <StyledLabelMarker background={subColor} />
      <StyledLabelTextView background={mainColor}>
        <StyledLabelTex numberOfLines={1} ellipsizeMode='clip'>
          {title}
        </StyledLabelTex>
      </StyledLabelTextView>
    </StyledCalendarLabel>
  );
}

export default CalendarLabel;
