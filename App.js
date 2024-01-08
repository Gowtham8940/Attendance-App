import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Selfie from './src/screens/Selfie';
import Home from './src/screens/Home';
import Map from './src/screens/Map';
import Test from './src/screens/Test';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Selfie" component={Selfie} />
        <Stack.Screen name="Map" component={Map} />
        {/* <Stack.Screen name="Test" component={Test} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
