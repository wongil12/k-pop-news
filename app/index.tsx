import HeaderBackButton from '@@components/HeaderBackButton';
import { SCREENS } from '@@constants/nav';
import Home from '@@pages/Home';
import Login from '@@pages/Login';
import Main from '@@pages/Main';
import { store } from '@@store';
import { NavigatorCallback } from '@@types/nav';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';

const Stack = createNativeStackNavigator<NavigatorCallback>();

function Page() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            contentStyle: {
              backgroundColor: '#fff',
            },
          }}
        >
          <Stack.Screen
            name={SCREENS.MAIN}
            component={Main}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name={SCREENS.LOGIN}
            component={Login}
            options={{
              headerTitle: '로그인',
              headerLeft: (props) => <HeaderBackButton {...props} />,
            }}
          />
        </Stack.Navigator>
        <Stack.Navigator
          screenOptions={{
            contentStyle: {
              backgroundColor: '#fff',
            },
          }}
        >
          <Stack.Screen
            name={SCREENS.HOME}
            component={Home}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default Page;
