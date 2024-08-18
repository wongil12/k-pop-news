import CalanderIcon from '@@components/CalanderIcon';
import { Flex } from '@@components/FlexView';
import { ScrollView } from 'react-native';

function CalanderList() {
  return (
    <ScrollView horizontal>
      <Flex.Horizontal>
        <CalanderIcon borderColor='#279E02' />
      </Flex.Horizontal>
    </ScrollView>
  );
}

export default CalanderList;
