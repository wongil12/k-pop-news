import { PropsWithChildren } from 'react';
import { TextInputProps as RNTextInputProps } from 'react-native';

export interface TextInputProps extends RNTextInputProps {
  errorMessage?: string | null;
  errorWithIcon?: boolean;
}

export interface ErrorMessageProps extends PropsWithChildren {
  withIcon?: boolean;
}
