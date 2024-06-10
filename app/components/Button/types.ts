import { asType } from '@@types/types';
import { BUTTON_VARIANT } from '@@components/Button/constants';
import { TouchableOpacityProps } from 'react-native';

export type ButtonVariant = asType<typeof BUTTON_VARIANT>;

export interface ButtonProps extends TouchableOpacityProps {
  variant: ButtonVariant;
}
