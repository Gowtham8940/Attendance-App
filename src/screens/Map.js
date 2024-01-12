import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

const Map = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <MapView
        style={{flex: 1}}
        provider={PROVIDER_GOOGLE}
        region={{
          latitude: 12.208660461016196,
          longitude: 78.37954011034851,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>
        <Marker coordinate={{latitude: 37.78825, longitude: -122.4324}} />
      </MapView>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('Time')}>
        <Text style={styles.title}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({
  title: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    color: 'white',
    padding: 5,
  },
  btn: {
    backgroundColor: 'black',
    
    borderRadius: 50,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: 10,
    alignSelf: 'center',
  },
});
