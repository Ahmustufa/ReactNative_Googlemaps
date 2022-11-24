import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';


const About = ({navigation}) => {

  return (
    <View style={styles.container}>
      <Text>About</Text>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center"
  }
})
