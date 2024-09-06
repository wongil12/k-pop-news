import { ReactNode } from 'react';
import { SvgProps } from 'react-native-svg';

export interface CalendarIconProps extends SvgProps {
  borderColor: string;
  emoji?: string;
  image?: ReactNode;
  disabled?: boolean;
}
