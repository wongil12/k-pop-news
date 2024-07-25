import { Flex } from '@@components/FlexView';
import { BodyMediumText } from '@@components/Text';
import { ASSETS } from '@@constants/assets';
import { Image } from 'react-native';
import { ErrorMessageProps } from './types';

function ErrorMessage({ withIcon, children }: ErrorMessageProps) {
  return (
    <Flex.Horizontal gap={4} alignItems='center'>
      {!!withIcon && <Image source={ASSETS.IMAGES.IconRottenPickel} />}
      <BodyMediumText color={ASSETS.COLORS.Alert600}>{children}</BodyMediumText>
    </Flex.Horizontal>
  );
}

export default ErrorMessage;
