import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '@@pages/Home';
import { Provider } from 'react-redux';
import { store } from '@@store/index';
import { useEffect, useState } from 'react';
import { Text } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    ExtraLight: require('./assets/fonts/AsapCondensed-ExtraLight.ttf'),
    ExtraLightItalic: require('./assets/fonts/AsapCondensed-ExtraLightItalic.ttf'),
    Light: require('./assets/fonts/AsapCondensed-Light.ttf'),
    LightItalic: require('./assets/fonts/AsapCondensed-LightItalic.ttf'),
    Regular: require('./assets/fonts/AsapCondensed-Regular.ttf'),
    RegularItalic: require('./assets/fonts/AsapCondensed-Italic.ttf'),
    Medium: require('./assets/fonts/AsapCondensed-Medium.ttf'),
    MediumItalic: require('./assets/fonts/AsapCondensed-MediumItalic.ttf'),
    SemiBold: require('./assets/fonts/AsapCondensed-SemiBold.ttf'),
    SemiBoldItalic: require('./assets/fonts/AsapCondensed-SemiBoldItalic.ttf'),
    Bold: require('./assets/fonts/AsapCondensed-Bold.ttf'),
    BoldItalic: require('./assets/fonts/AsapCondensed-BoldItalic.ttf'),
    ExtraBold: require('./assets/fonts/AsapCondensed-ExtraBold.ttf'),
    ExtraBoldItalic: require('./assets/fonts/AsapCondensed-ExtraBoldItalic.ttf'),
    Black: require('./assets/fonts/AsapCondensed-Black.ttf'),
    BlackItalic: require('./assets/fonts/AsapCondensed-BlackItalic.ttf'),
  });

  if (!fontsLoaded) {
    <Text>Loading...</Text>;
  }

  return (
    // <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
    // </Provider>
  );
}
