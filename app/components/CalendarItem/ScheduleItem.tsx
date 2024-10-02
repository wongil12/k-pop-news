import { Flex } from '@@components/FlexView';
import { BodySmallerText } from '@@components/Text';
import { View } from '@@components/View';
import styled from 'styled-components';
import { ScheduleItemProps } from '@@components/CalendarItem/types';

const StyledScheduleItem = styled(Flex.Horizontal)`
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

function ScheduleItem({ schedule }: ScheduleItemProps) {
  const { title, color } = schedule;

  return (
    <StyledScheduleItem>
      <StyledLabelMarker background={color} />
      <StyledLabelTextView background={color}>
        <StyledLabelTex numberOfLines={1} ellipsizeMode='clip'>
          {title}
        </StyledLabelTex>
      </StyledLabelTextView>
    </StyledScheduleItem>
  );
}

export default ScheduleItem;
