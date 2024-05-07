import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import Page from '@@index';

export default function App() {
  const [fontsLoaded] = useFonts({
    PickAllExtraLight: require('./assets/fonts/AsapCondensed-ExtraLight.ttf'),
    PickAllExtraLightItalic: require('./assets/fonts/AsapCondensed-ExtraLightItalic.ttf'),
    PickAllLight: require('./assets/fonts/AsapCondensed-Light.ttf'),
    PickAllLightItalic: require('./assets/fonts/AsapCondensed-LightItalic.ttf'),
    PickAllRegular: require('./assets/fonts/AsapCondensed-Regular.ttf'),
    PickAllRegularItalic: require('./assets/fonts/AsapCondensed-Italic.ttf'),
    PickAllMedium: require('./assets/fonts/AsapCondensed-Medium.ttf'),
    PickAllMediumItalic: require('./assets/fonts/AsapCondensed-MediumItalic.ttf'),
    PickAllSemiBold: require('./assets/fonts/AsapCondensed-SemiBold.ttf'),
    PickAllSemiBoldItalic: require('./assets/fonts/AsapCondensed-SemiBoldItalic.ttf'),
    PickAllBold: require('./assets/fonts/AsapCondensed-Bold.ttf'),
    PickAllBoldItalic: require('./assets/fonts/AsapCondensed-BoldItalic.ttf'),
    PickAllExtraBold: require('./assets/fonts/AsapCondensed-ExtraBold.ttf'),
    PickAllExtraBoldItalic: require('./assets/fonts/AsapCondensed-ExtraBoldItalic.ttf'),
    PickAllBlack: require('./assets/fonts/AsapCondensed-Black.ttf'),
    PickAllBlackItalic: require('./assets/fonts/AsapCondensed-BlackItalic.ttf'),
  });

  if (!fontsLoaded) {
    <AppLoading />;
  } else {
    return <Page />;
  }
}
