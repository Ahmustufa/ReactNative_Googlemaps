import React from 'react';
import Home from '../screens/Home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import SearchLocation from '../components/SearchLocation';
import Feed from '../screens/Feed';
import DrawerNavigation from './DrawerNavigation';
import Booking from '../screens/Booking';
const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name="Drawer"
          component={DrawerNavigation}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Feed" component={Feed} />
        <Stack.Screen name="Search" component={SearchLocation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
