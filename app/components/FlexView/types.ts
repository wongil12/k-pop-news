import { ViewProps } from '@@components/View/types';
import { FlexAlignType } from 'react-native';

interface AdditionalFlexViewProps {
  full?: boolean;
  alignItems?: FlexAlignType;
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  alignSelf?: 'auto' | FlexAlignType;
  gap?: number | string;
  flex?: number;
  flexGrow?: number;
}

export type FlexViewProps = ViewProps & AdditionalFlexViewProps;
