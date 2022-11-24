import {View, Text, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
// import { Icon } from 'react-native-vector-icons/Icon';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import Geolocation from '@react-native-community/geolocation';

const SearchLocation = ({navigation}) => {
  const [location, setLocation] = useState({
    long: '',
    latit: '',
  });
  const [current, setCurrent] = useState({
    description: 'Home',
    geometry: {latitude: 24.813736, longitude: 67.018811},
  });
  Geolocation.getCurrentPosition(info => {
    // setCurrent({...current.geometry, latitude: info.coords.latitude, longitude: info.coords.longitude})
    console.log('current', info.coords);
  });
  const handleSubmit = (data, details) => {
    console.log('details', details);
    const {lat, lng} = details.geometry.location;
    setLocation({...location, latit: lat, long: lng});
    if (location) {
      navigation.navigate('Home', {lat, lng});
    }
  };
  console.log(location);
  return (
    <SafeAreaView style={styles.search}>
      <TouchableOpacity onPress={()=>navigation.navigate('Book')}>
          <Icon
          style={{marginLeft: 10, marginTop: 10}}
            name="arrowleft"
            color="black"
            size={25}
            backgroundColor="transparent"
          />
        </TouchableOpacity>
      <Text style={{textAlign: 'center', fontSize: 20, marginBottom: 20}}>Search Location</Text>
      {/* <View style={{height: "20%"}}> */}
      {/* <GooglePlacesAutocomplete
        placeholder="Search"
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
        }}
        predefinedPlaces={[current]}
      /> */}
      {/* </View> */}
    
      <GooglePlacesAutocomplete
        //  currentLocation={true}
        //  currentLocationLabel='Current location'
        
        placeholder="Search Location?"
        fetchDetails={true}
        onPress={(data, details = null) => handleSubmit(data, details)}
        // styles={{
        //   textInput: styles.textInput,
        // }}
        query={{
          key: process.env.GOOGLE_MAPS_API_KEY,
          language: 'en',
        }}
      />
    </SafeAreaView>
  );
};

export default SearchLocation;

const styles = StyleSheet.create({
  search: {
    height: '100%',
  },
});
