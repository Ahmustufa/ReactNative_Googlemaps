import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import React, {useCallback, useMemo, useRef, useEffect, useState} from 'react';
import {GestureDetector, Gesture} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
// import BottomSheet from '@gorhom/bottom-sheet';
const rides = [
  {
    id: 1,
    title: 'ECONOMY',
    img: require('../assets/Uber-Eco.jpeg'),
    des: 'Fair: $5',
  },
  {
    id: 2,
    title: 'COMFORT',
    img: require('../assets/Uber-XL.jpeg'),
    des: 'Fair: $10',
  },
  {
    id: 3,
    title: 'EXCLUSIVE',
    img: require('../assets/Comfort.jpeg'),
    des: 'Fair: $20',
  },
];
const {height: SCREEN_HEIGHT} = Dimensions.get('window');
const MAX_TRANSLATE_Y = -SCREEN_HEIGHT + 50;
const BottomSheets = () => {
  const [selectedRide, setSelectedRide] = useState('');
  const translateY = useSharedValue(0);
  const context = useSharedValue({y: 0});
  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value = {y: translateY.value};
    })
    .onUpdate(event => {
      translateY.value = event.translationY + context.value.y;
      translateY.value = Math.max(translateY.value, MAX_TRANSLATE_Y);
    });
  const rBottomSheetStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: translateY.value}],
    };
  });
  useEffect(() => {
    (translateY.value = withSpring(-SCREEN_HEIGHT / 3)), {damping: 50};
  }, []);

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[styles.main, rBottomSheetStyle]}>
        <View style={styles.line} />
        <View style={styles.rideContainer}>
          {rides.map(item => {
            return (
              <TouchableOpacity
                style={
                  selectedRide == item.id
                    ? styles.btnContainerSelect
                    : styles.btnContainer
                }
                onPress={() => setSelectedRide(item.id)}>
                <Image source={item.img} style={styles.imgEco} />
                <View style={styles.textCon}>
                  <Text>{item.title}</Text>
                  <Text>{item.des}</Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </Animated.View>
    </GestureDetector>
  );
};

export default BottomSheets;

const styles = StyleSheet.create({
  main: {
    height: SCREEN_HEIGHT,
    width: '100%',
    backgroundColor: 'white',
    position: 'absolute',
    top: SCREEN_HEIGHT,
    borderRadius: 25,
    // marginTop: 50,
  },
  line: {
    width: 75,
    height: 4,
    backgroundColor: 'grey',
    alignSelf: 'center',
    marginVertical: 15,
    borderRadius: 2,
  },
  container: {
    flex: 0.5,
    // padding: 50,
    // backgroundColor: '',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  rideContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    //  position: "absolute",
    //  bottom: 0,
    paddingVertical: 10,

    // right: 0,
    left: 0,
    //
  },
  imgEco: {
    width: 80,
    height: 50,
    backgroundColor: 'transparent',
  },
  btnContainer: {
    borderWidth: 0.5,
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 5,
    padding: 10,
    //   justifyContent: "space-evenly",
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  btnContainerSelect: {
    borderWidth: 0.5,
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 5,
    padding: 10,
    //   justifyContent: "space-evenly",
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'orange',
  },
  textCon: {
    paddingHorizontal: 20,
  },
});
