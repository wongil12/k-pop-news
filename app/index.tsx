import Main from '@@pages/Main';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function Page() {
  return (
    // <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          contentStyle: {
            backgroundColor: '#fff',
          },
        }}
      >
        <Stack.Screen
          name='Main'
          component={Main}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    // </Provider>
  );
}

export default Page;
