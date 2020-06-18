import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Splash,
  Login,
  Register,
  WelcomeAuth,
  ManagementKeuangan,
} from '../pages';

const Stack = createStackNavigator();

function NavStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          title: false,
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },
        }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          title: false,
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },
        }}
      />
      <Stack.Screen
        name="WelcomeAuth"
        component={WelcomeAuth}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ManagementKeuangan"
        component={ManagementKeuangan}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default NavStack;