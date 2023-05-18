import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Home from '../../pages/Home';
import SignIn from '../../pages/SignIn';


const Stack = createNativeStackNavigator();

export default function MainStack() {
 return (
   <Stack.Navigator
    screenOptions={{
      headerShown: false
    }}
   >
    <Stack.Screen name="Sign" component={SignIn}/>
    <Stack.Screen name="Home" component={Home}/>
   </Stack.Navigator>
  );
}