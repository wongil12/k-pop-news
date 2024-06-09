import { TextInput as RNTextInput } from 'react-native';
import styled from 'styled-components';
import { TextInputProps } from '@@components/Input/types';

const StyledTextInput = styled(RNTextInput)`
  background: #fff;
`;

export function TextInput(props: TextInputProps) {
  return <StyledTextInput {...props} />;
}
