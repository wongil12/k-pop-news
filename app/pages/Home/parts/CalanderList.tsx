import CalanderFilter from '@@components/CalanderFilter';
import CalanderIcon from '@@components/CalanderIcon';
import { Flex } from '@@components/FlexView';
import { ASSETS } from '@@constants/assets';
import { Image, ScrollView } from 'react-native';
import styled from 'styled-components';

const DUMMY_DATA = [
  {
    borderColor: '#279E02',
    emoji: '🥒',
    description: '피클타임 필라테스',
  },
  {
    borderColor: '#E59928',
    emoji: '💪',
    description: '헬시 필라',
  },
  {
    borderColor: '#FF8967',
    emoji: '🥕',
    description: '당당한 근육 몸짱 필라테스',
  },
];

const StyledScrollView = styled(ScrollView)`
  margin-top: 12px;
`;

function CalanderList() {
  return (
    <StyledScrollView showsHorizontalScrollIndicator={false} horizontal>
      <Flex.Horizontal gap={11} paddingHorizontal={20}>
        <CalanderFilter image={<Image source={ASSETS.IMAGES.IconCheck} />} borderColor={ASSETS.COLORS.Neutural800} description='전체' />
        {DUMMY_DATA.map((data, index) => (
          <CalanderFilter key={index} emoji={data.emoji} borderColor={data.borderColor} description={data.description} />
        ))}
      </Flex.Horizontal>
    </StyledScrollView>
  );
}

export default CalanderList;
