import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  bottomsheet:{
    display: 'flex',
    alignItems: 'flex-end'
  },  
  btn: {
    borderWidth: 1,
    padding: 20,
    textAlign: 'center',
    width: 200,
    borderRadius: 10,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  clocation: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderWidth: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
    borderRadius: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  searchBox:{
    position: 'absolute',
    top: 100,
    flexDirection: 'row',
    backgroundColor: "#fff",
    alignSelf: 'center',
    borderRadius: 5,
    height: "100%",
    left: 10,
    right: 10
  }
});

export default styles;
