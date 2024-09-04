import { ViewProps as RNViewProps } from 'react-native';

export interface AdditionalViewProps {
  paddingHorizontal?: number | string;
  paddingVertical?: number | string;
  paddingTop?: number | string;
  paddingRight?: number | string;
  paddingBottom?: number | string;
  paddingLeft?: number | string;

  marginHorizontal?: number | string;
  marginVertical?: number | string;
  marginTop?: number | string;
  marginRight?: number | string;
  marginBottom?: number | string;
  marginLeft?: number | string;

  background?: string;
}

export type ViewProps = AdditionalViewProps & RNViewProps;
