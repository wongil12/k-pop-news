import { Flex } from '@@components/FlexView';
import { HeaderMediumText } from '@@components/Text';
import { ASSETS } from '@@constants/assets';
import { useAppState } from '@@store/hooks';
import { Image } from 'react-native';

function Header() {
  const currentDate = useAppState((state) => state.scheduleSvc.home.currentDate);

  return (
    <Flex.Horizontal style={{ height: 50 }} justifyContent='space-between' alignItems='center' paddingHorizontal={20}>
      <Image source={ASSETS.IMAGES.IconBars} />
      <HeaderMediumText>
        {currentDate.getFullYear()}.{String(currentDate.getMonth() + 1).padStart(2, '0')}
      </HeaderMediumText>
      <Image source={ASSETS.IMAGES.IconSearch} />
    </Flex.Horizontal>
  );
}

export default Header;
