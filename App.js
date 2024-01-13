import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Selfie from './src/screens/Selfie';
import Home from './src/screens/Home';
import Map from './src/screens/Map';
import TimeScreen from './src/screens/TimeScreen';
import TimeScreen2 from './src/screens/TimeScreen2';
// import Testingscreen from './src/screens/TestingScreen';
import GetCurrentLocation from './src/screens/TestingScreen';
import SuccessScreen from './src/screens/SuccessScreen';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Success"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Selfie" component={Selfie} />
        <Stack.Screen name="Map" component={Map} />
        <Stack.Screen name="Time" component={TimeScreen} />
        <Stack.Screen name="Time2" component={TimeScreen2} />
        <Stack.Screen name="Testing" component={GetCurrentLocation} />
        <Stack.Screen name="Success" component={SuccessScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
