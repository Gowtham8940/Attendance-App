import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React from 'react';

const Home = ({navigation}) => {
  return (
    <View>
      <Text
        style={{
          fontSize: 40,
          fontWeight: 'bold',
          textAlign: 'center',
          marginTop: 50,
          marginBottom: 50,
          color: 'black',
        }}>
        Attendance App
      </Text>
      <View style={styles.ImageContainer}>
        <Image style={styles.img} source={require('../Images/1.png')}></Image>
      </View>

      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          // console.log('Start Day');
          navigation.navigate('Time');
        }}
        style={{
          backgroundColor: 'black',
          padding: 10,
          borderRadius: 30,
          marginTop: 20,
          paddingHorizontal: 10,
          paddingVertical: 10,
          margin: 40,
          marginTop: 450,
        }}>
        <Text
          style={{
            color: 'white',
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 20,
            padding: 5,
          }}>
          Start Day
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  ImageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    margin: 20,
    borderRadius: 20,
    backgroundColor: 'plum',
    padding: 20,
    borderWidth: 5,
    borderColor: 'black',
    alignSelf: 'center',
    marginTop: 400,
  },
});
