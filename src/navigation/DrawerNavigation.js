import Home from '../screens/Home';
import About from '../screens/About';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import SearchLocation from '../components/SearchLocation';
import Booking from '../screens/Booking';
import Profile from '../screens/Profile';
import Settings from '../screens/Settings';
const Drawer = createDrawerNavigator();
const DrawerNavigation = () => {
  return (
    <>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Book"
          options={{headerShown: false}}
          component={Booking}
        />
        <Drawer.Screen name="About" component={About} />
        <Drawer.Screen name='Profile' component={Profile}/>
        <Drawer.Screen name='Settings' component={Settings}/>
      </Drawer.Navigator>
    </>
  );
};

export default DrawerNavigation;
