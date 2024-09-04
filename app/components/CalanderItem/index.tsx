import { Flex } from '@@components/FlexView';
import { BodySmallText } from '@@components/Text';
import CalanderLabel from '@@components/CalanderItem/CalanderLabel';
import styled from 'styled-components';
import { CalanderItemProps } from '@@components/CalanderItem/types';

const StyleDateTextView = styled(Flex.Horizontal)`
  width: 32px;
  height: 32px;
`;

function CalanderItem({ scheduleList, date, ...props }: CalanderItemProps) {
  return (
    <Flex.Vertical alignItems='center' {...props}>
      <StyleDateTextView alignItems='center' justifyContent='center'>
        <BodySmallText>{String(date).padStart(2, '0')}</BodySmallText>
      </StyleDateTextView>
      <Flex.Vertical style={{ alignSelf: 'stretch' }} marginTop={4} gap={1}>
        <CalanderLabel />
      </Flex.Vertical>
    </Flex.Vertical>
  );
}

export default CalanderItem;
