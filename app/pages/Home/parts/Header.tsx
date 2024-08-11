import { Flex } from '@@components/FlexView';
import { BodyLargeText, HeaderMediumText } from '@@components/Text';
import { ASSETS } from '@@constants/assets';
import { Image } from 'react-native';

function Header() {
  const date = new Date();

  return (
    <Flex.Horizontal style={{ height: 50 }} justifyContent='space-between' alignItems='center' paddingHorizontal={20}>
      <Image source={ASSETS.IMAGES.IconBars} />
      <HeaderMediumText>
        {date.getFullYear()}.{String(date.getMonth()).padStart(2, '0')}.{String(date.getDate()).padStart(2, '0')}
      </HeaderMediumText>
      <Image source={ASSETS.IMAGES.IconSearch} />
    </Flex.Horizontal>
  );
}

export default Header;
