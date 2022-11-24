import { View, Text } from 'react-native'
import * as React from 'react';
import DrawerNavigation from './src/navigation/DrawerNavigation'
import StackNavigation from './src/navigation/StackNavigation';

const App = () => {
  return (
    <>
    <StackNavigation/>
    {/* <DrawerNavigation/> */}
    </>
  )
}

export default App