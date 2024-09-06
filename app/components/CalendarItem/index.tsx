import { Flex } from '@@components/FlexView';
import { BodySmallText } from '@@components/Text';
import CalendarLabel from '@@components/CalendarItem/CalendarLabel';
import styled from 'styled-components';
import { CalendarItemProps } from '@@components/CalendarItem/types';

const StyleDateTextView = styled(Flex.Horizontal)`
  width: 32px;
  height: 32px;
`;

function CalendarItem({ scheduleList, date, ...props }: CalendarItemProps) {
  return (
    <Flex.Vertical alignItems='center' {...props}>
      <StyleDateTextView alignItems='center' justifyContent='center'>
        <BodySmallText>{date}</BodySmallText>
      </StyleDateTextView>
      <Flex.Vertical style={{ alignSelf: 'stretch' }} marginTop={4} gap={1}>
        {scheduleList?.map((schedule, index) => (
          <CalendarLabel key={index} schedule={schedule} />
        ))}
      </Flex.Vertical>
    </Flex.Vertical>
  );
}

export default CalendarItem;
