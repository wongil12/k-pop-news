import CalanderItem from '@@components/CalanderItem';
import { Flex } from '@@components/FlexView';
import { CalanderProps } from '@@components/Calander/types';

function Calander({ scheduleList, ...props }: CalanderProps) {
  return (
    <Flex.Vertical {...props}>
      <CalanderItem />
    </Flex.Vertical>
  );
}

export default Calander;
