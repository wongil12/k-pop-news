import { Flex } from '@@components/FlexView';
import { TextInput } from '@@components/Input';
import { BodyMediumText } from '@@components/Text';
import { ASSETS } from '@@constants/assets';
import { useState } from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components';

const ForgetTextView = styled(BodyMediumText)`
  color: ${ASSETS.COLORS.Neutural600};
  align-self: flex-end;
`;

function Login() {
  const [email, setEmail] = useState<string>('');

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Flex.Vertical full paddingHorizontal={30}>
        <Flex.Vertical gap={20}>
          <TextInput value={email} onChangeText={setEmail} placeholder='이메일을 입력하세요' />
          <ForgetTextView>이메일을 잊었나요?</ForgetTextView>
        </Flex.Vertical>
      </Flex.Vertical>
    </TouchableWithoutFeedback>
  );
}

export default Login;
