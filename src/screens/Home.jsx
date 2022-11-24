import {
  View,
  Text,
  SafeAreaView,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import styles from '../styles/homeStyles';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import StackNavigation from '../navigation/StackNavigation';
import DrawerNavigation from '../navigation/DrawerNavigation';
import { drivers } from '../utils/DriverMap';
import BottomSheet from '../components/BottomSheet';

const Home = ({navigation, route}) => {
  const [origin, setOrigin] = useState({
    latitude: 24.813736,
    longitude: 67.018811,
  });
  const [destination, setDestination] = useState({
    latitude: route?.params?.lat,
    longitude: route?.params?.lng,
  });
  // const myIcon = <Icon name="rocket" size={30} color="#900" />;
  const handleRegionChange = region => {
    setOrigin({
      latitude: 24.813736,
      longitude: 67.018811,
    });
  };
 
  console.log(route?.params?.lng, route?.params?.lat);
  
  return (
    <>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        showsUserLocation
        loadingEnabled={true}
        moveOnMarkerPress={false}
        showsMyLocationButton
        // onRegionChange={handleRegionChange}
        // showsTraffic
        loadingEnabled
        initialRegion={origin}>
        <TouchableOpacity onPress={()=>navigation.navigate('Book')}>
          <Icon
            style={{paddingLeft: 10, marginTop: 50}}
            name="arrowleft"
            color="black"
            size={25}
            backgroundColor="transparent"
          />
        </TouchableOpacity>

       
        <MapViewDirections
          origin={origin}
          destination={{
            latitude: route?.params?.lat,
            longitude: route?.params?.lng,
          }}
          apikey={process.env.GOOGLE_MAPS_API_KEY}
          strokeWidth={5}
          strokeColor="hotpink"
        />
        <Marker
          title="Destinatdon"
          key={route?.params?.lat}
          dragable
          coordinate={{
            latitude: route?.params?.lat,
            // latitude: 24.8035,
            longitude: route?.params?.lng,
            // longitude: 67.0205,
          }}
        />
        {drivers.map((item, index)=>{
          return(
            <Marker 
            key={index}
            coordinate={{
              latitude: item.latitude,
              longitude: item.longitude
            }}
            >
              <Image source={require('../assets/top-Comfort.png')} style={{width: 26, height: 28}} resizeMode='contain'/>
            </Marker>
          )
        })
          
        }
        
      </MapView>
      
    </>
  );
};

export default Home;

