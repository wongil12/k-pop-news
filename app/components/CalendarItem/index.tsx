import { Flex } from '@@components/FlexView';
import { BodySmallText } from '@@components/Text';
import ScheduleItem from '@@components/CalendarItem/ScheduleItem';
import styled from 'styled-components';
import { CalendarItemProps } from '@@components/CalendarItem/types';
import { format } from 'date-fns';

const StyledCalendarItem = styled(Flex.Vertical)<{ isPreview: boolean }>`
  opacity: ${({ isPreview }) => (isPreview ? 0.5 : 1)};
`;

const StyleDateTextView = styled(Flex.Horizontal)`
  width: 32px;
  height: 32px;
`;

function CalendarItem({ scheduleList, date, isPreview, ...props }: CalendarItemProps) {
  return (
    <StyledCalendarItem alignItems='center' isPreview={!!isPreview} {...props}>
      <StyleDateTextView alignItems='center' justifyContent='center'>
        <BodySmallText>{format(date, 'd')}</BodySmallText>
      </StyleDateTextView>
      <Flex.Vertical style={{ alignSelf: 'stretch' }} marginTop={4} gap={1}>
        {scheduleList?.map((schedule, index) => (
          <ScheduleItem key={index} schedule={schedule} />
        ))}
      </Flex.Vertical>
    </StyledCalendarItem>
  );
}

export default CalendarItem;
