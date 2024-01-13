import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

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
