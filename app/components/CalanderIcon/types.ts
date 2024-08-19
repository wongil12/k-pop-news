import { ReactNode } from 'react';
import { SvgProps } from 'react-native-svg';

export interface CalanderIconProps extends SvgProps {
  borderColor: string;
  emoji?: string;
  image?: ReactNode;
  disabled?: boolean;
}
