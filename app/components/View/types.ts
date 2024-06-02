import { ViewProps as RNViewProps } from 'react-native';

export interface AdditionalViewProps {
  paddingHorizontal?: number;
  paddingVertical?: number;
  paddingTop?: number;
  paddingRight?: number;
  paddingBottom?: number;
  paddingLeft?: number;

  marginHorizontal?: number;
  marginVertical?: number;
  marginTop?: number;
  marginRight?: number;
  marginBottom?: number;
  marginLeft?: number;
}

export type ViewProps = AdditionalViewProps & RNViewProps;
