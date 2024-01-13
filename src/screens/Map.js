import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Map = ({navigation, route}) => {
  const latitude = route.params.latitude;
  const longitude = route.params.longitude;
  const image = route.params.image;

  return (
    <View style={{flex: 1}}>
      <MapView
        style={{flex: 1}}
        provider={PROVIDER_GOOGLE}
        region={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>
        <Marker coordinate={{latitude: latitude, longitude: longitude}} />
      </MapView>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          AsyncStorage.setItem('key', 'start');
          navigation.navigate('Success');
        }}>
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
    position: 'absolute',
    borderRadius: 50,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: 10,
    alignSelf: 'center',
    top: 0,
    bottom: 0,
    left: 140,
    right: 150,
    padding: 5,
    marginTop: 650,
  },
});
