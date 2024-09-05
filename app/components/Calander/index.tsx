import CalanderItem from '@@components/CalanderItem';
import { Flex } from '@@components/FlexView';
import { CalanderProps } from '@@components/Calander/types';

function Calander({ scheduleList, ...props }: CalanderProps) {
  const a = [1, 2, 3, 4, 5, 6, 7];
  return (
    <Flex.Vertical {...props}>
      <Flex.Horizontal justifyContent='space-between'>
        {a.map((v) => (
          <CalanderItem flex={1} date={v} scheduleList={[]} />
        ))}
      </Flex.Horizontal>
      <Flex.Horizontal justifyContent='space-between'>
        {a.map((v) => (
          <CalanderItem flex={1} date={v} scheduleList={[]} />
        ))}
      </Flex.Horizontal>
    </Flex.Vertical>
  );
}

export default Calander;
