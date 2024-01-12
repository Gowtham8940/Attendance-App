import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Selfie from './src/screens/Selfie';
import Home from './src/screens/Home';
import Map from './src/screens/Map';
import TimeScreen from './src/screens/TimeScreen';
import TimeScreen2 from './src/screens/TimeScreen2';
// import CountDown from './src/screens/CountDown';

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
        {/* <Stack.Screen name="CountDown" component={CountDown} /> */}
        <Stack.Screen name="Time" component={TimeScreen} />
        <Stack.Screen name="Time2" component={TimeScreen2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
