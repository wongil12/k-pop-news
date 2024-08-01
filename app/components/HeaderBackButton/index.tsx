import { ASSETS } from '@@constants/assets';
import { HeaderBackButtonProps } from '@react-navigation/native-stack/lib/typescript/src/types';
import { Image } from 'react-native';

function HeaderBackButton(props: HeaderBackButtonProps) {
  return <Image {...props} tintColor='black' source={ASSETS.IMAGES.IconArrowLeft} />;
}

export default HeaderBackButton;
