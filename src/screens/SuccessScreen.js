import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';

const SuccessScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Time');
    }, 2000);
  }, [navigation]);
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Text style={styles.title}>Success...!!</Text>
      </View>
      <View style={styles.txt}>
        <Text style={styles.txt}>Thank You For Your Confirmation...</Text>
        <Text style={styles.txt}>Have A good Day :)</Text>
      </View>
    </View>
  );
};

export default SuccessScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
  iconContainer: {
    width: 250,
    height: 250,
    backgroundColor: 'black',
    borderRadius: 125,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    color: 'white',
  },
  txt: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    color: 'black',
  },
});
