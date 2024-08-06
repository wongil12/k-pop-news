import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import Page from '@@index';
import { Provider } from 'react-redux';
import { store } from '@@store';

export default function App() {
  const [fontsLoaded] = useFonts({
    PickAllAsapExtraLight: require('./assets/fonts/AsapCondensed-ExtraLight.ttf'),
    PickAllAsapLight: require('./assets/fonts/AsapCondensed-Light.ttf'),
    PickAllAsapRegular: require('./assets/fonts/AsapCondensed-Regular.ttf'),
    PickAllAsapMedium: require('./assets/fonts/AsapCondensed-Medium.ttf'),
    PickAllAsapSemiBold: require('./assets/fonts/AsapCondensed-SemiBold.ttf'),
    PickAllAsapBold: require('./assets/fonts/AsapCondensed-Bold.ttf'),
    PickAllAsapExtraBold: require('./assets/fonts/AsapCondensed-ExtraBold.ttf'),
    PickAllAsapBlack: require('./assets/fonts/AsapCondensed-Black.ttf'),
    PickAllPretendardBold: require('./assets/fonts/Pretendard-Bold.ttf'),
    PickAllPretendardRegular: require('./assets/fonts/Pretendard-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Provider store={store}>
        <Page />
      </Provider>
    );
  }
}
