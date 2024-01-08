import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const Home = ({navigation}) => {
  return (
    <View>
      <Text style={{fontSize: 40, fontWeight: 'bold', textAlign: 'center', marginTop: 50,
      marginBottom: 50,color:'black'}}>
        Attendance App
      </Text>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          navigation.navigate('Selfie');
        }}
        style={{
          backgroundColor: 'black',
          padding: 10,
          borderRadius: 30,
          marginTop: 20,
          paddingHorizontal:10,
          paddingVertical:10,
          margin:40,
          marginTop: 450,
        }}>
        <Text
          style={{
            color: 'white',
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 20,
            padding:5,
          }}>
          Start Day
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
