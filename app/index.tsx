import HeaderBackButton from '@@components/HeaderBackButton';
import { SCREENS } from '@@constants/nav';
import Home from '@@pages/Home';
import Login from '@@pages/Login';
import Main from '@@pages/Main';
import { NavigatorCallback } from '@@types/nav';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { store } from './store/index';

const Stack = createNativeStackNavigator<NavigatorCallback>();

function Page() {
  // const token = useAppState((state) => state.authSvc.login.token);
  const token = 'asdf';

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
          {token ? (
            <Stack.Screen
              name={SCREENS.HOME}
              component={Home}
              options={{
                headerShown: false,
              }}
            />
          ) : (
            <>
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
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default Page;
