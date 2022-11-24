import {
    View,
    Text,
    SafeAreaView,
    Button,
    TouchableOpacity,
    Animated,
    Image
  } from 'react-native';
  import React, {useState} from 'react';
  import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
  import MapViewDirections from 'react-native-maps-directions';
  import Icon from 'react-native-vector-icons/dist/Entypo';
  import styles from '../styles/homeStyles';
  import { drivers } from '../utils/DriverMap';
import BottomSheets from '../components/BottomSheet';
const Booking = ({navigation, route}) => {
    const [origin, setOrigin] = useState({
        latitude: 24.813736,
        longitude: 67.018811,
      });
      const [destination, setDestination] = useState({
        latitude: route?.params?.lat,
        longitude: route?.params?.lng,
      });
      const handleRegionChange = region => {
        setOrigin({
          latitude: 24.813736,
          longitude: 67.018811,
        });
      };
      console.log(route?.params?.lng, route?.params?.lat);
      const handleDrawerOpen = () => {
        navigation.openDrawer();
      };
  return (
      <View style={styles.container}>
    <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        showsUserLocation
        loadingEnabled={true}
        moveOnMarkerPress={false}
        showsMyLocationButton
        loadingEnabled
        initialRegion={origin}>
        <TouchableOpacity onPress={handleDrawerOpen}>
          <Icon
            style={{paddingLeft: 10, marginTop: 50}}
            name="menu"
            color="black"
            size={40}
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
            description="5mins away"
            >
              <Image source={require('../assets/top-Comfort.png')} style={{width: 26, height: 28}} resizeMode='contain'/>
            </Marker>
          )
        })
          
        }
        {/* <View
          style={{flex: 1, alignItems: 'center', justifyContent: 'flex-end'}}>
          <TouchableOpacity style={styles.btn} >
            <Text>Search Location</Text>
          </TouchableOpacity>
        </View> */}
      </MapView>
        <BottomSheets style={styles.bottomsheet} />
        <View style={{flexDirection: 'row', width: '100%'}}>
        <TouchableOpacity style={{width: "50%"}} onPress={()=> navigation.navigate('Search')} >
          <Text style={{padding: 20, backgroundColor: "black", color: "white", textAlign: "center"}}>Book Later</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{width: "50%"}} onPress={()=> navigation.navigate('Search')}>
          <Text style={{padding: 20, backgroundColor: "orange", color: "white", textAlign: "center"}}>Book Later</Text>
        </TouchableOpacity>
        </View>
      </View>
  )
}

export default Booking