import { NavigatorCallback } from '@@types/nav';
import { useNavigation as rnUseNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export const useNavigation = () => {
  const navigation = rnUseNavigation<NativeStackNavigationProp<NavigatorCallback>>();
  return navigation;
};
