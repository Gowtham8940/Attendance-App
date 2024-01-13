import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import GetLocation from '@react-native-community/geolocation';

const TestingScreen = () => {
  GetLocation.getCurrentPosition(
    position => {
      console.log(position);
    },
    error => {
      console.log(error.code, error.message);
    },
    {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
  );

  return (
    <View>
      <Text>TestingScreen</Text>
      <Text>{JSON.stringify(GetLocation)}</Text>
      
    </View>
  );
};

export default TestingScreen;

const styles = StyleSheet.create({});
