// import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// import React, {useState} from 'react';
// import DateTimePickerModal from 'react-native-modal-datetime-picker';
// import CountDown from './CountDown';
// import TimeScreen from './TimeScreen';

// const TimeScreen2 = ({navigation}) => {
//   const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
//   const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

//   const showDatePicker = () => {
//     setDatePickerVisibility(true);
//   };

//   const hideDatePicker = () => {
//     setDatePickerVisibility(false);
//   };

//   const handleDateConfirm = date => {
//     console.log('A date has been picked: ', date);
//     hideDatePicker();
//   };
//   const showTimePicker = () => {
//     setTimePickerVisibility(true);
//   };

//   const hideTimePicker = () => {
//     setTimePickerVisibility(false);
//   };

//   const handleTimeConfirm = time => {
//     console.log('A date has been picked: ', time);
//     hideTimePicker();
//   };
//   return (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <Text style={styles.title}>LogoutTime</Text>
//       <Text style={{fontWeight: 'bold', fontSize: 20, marginTop: 20}}>
//         {new Date().toDateString()}
//       </Text>
//       <Text style={{fontWeight: 'bold', fontSize: 20, marginTop: 20}}>
//         {new Date().toLocaleTimeString()}
//       </Text>
//       <DateTimePickerModal
//         isVisible={isDatePickerVisible}
//         mode="date"
//         onConfirm={handleDateConfirm}
//         onCancel={hideDatePicker}
//       />
//       <DateTimePickerModal
//         isVisible={isTimePickerVisible}
//         mode="time"
//         onConfirm={handleTimeConfirm}
//         onCancel={hideTimePicker}
//       />
//       {/* <TimeScreen /> */}
//       <TouchableOpacity
//         style={styles.btn}
//         onPress={() => navigation.navigate('Selfie')}>
//         <Text style={styles.title2}>Continue</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default TimeScreen2;

// const styles = StyleSheet.create({
//   title: {
//     fontSize: 40,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginTop: 10,
//     color: 'black',
//   },
//   btn: {
//     backgroundColor: 'black',
//     padding: 10,
//     borderRadius: 10,

//     paddingHorizontal: 10,
//     paddingVertical: 10,

//     marginTop: 350,
//     width: 300,
//     alignItems: 'center',
//     justifyContent: 'center',
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     margin: 50,
//   },
//   title2: {
//     color: 'white',
//     textAlign: 'center',
//     fontWeight: 'bold',
//     fontSize: 20,
//     padding: 5,
//   },
// });
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TimeScreen from './TimeScreen';

const TimeScreen2 = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      
      <TimeScreen />
    </View>
  );
};

export default TimeScreen2;

const styles = StyleSheet.create({});
