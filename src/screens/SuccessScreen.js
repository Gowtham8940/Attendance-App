import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const SucessScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Text style={styles.title}>Success...!!</Text>
        <Text style={styles.txt}>Thank You For Your Confirmation...</Text>
        <Text style={styles.txt}>$(``Have A good Day:``)</Text>
      </View>
    </View>
  );
};

export default SucessScreen;

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
    
  },
});
