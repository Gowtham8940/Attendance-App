import {StyleSheet, Text, TouchableOpacity, View, Button} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import CountDown from './CountDown';

const TimeScreen = ({navigation}) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleDateConfirm = date => {
    console.log('A date has been picked: ', date);
    hideDatePicker();
  };
  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleTimeConfirm = time => {
    console.log('A date has been picked: ', time);
    hideTimePicker();
  };
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setSeconds(prevSeconds => {
        if (prevSeconds === 59) {
          setMinutes(prevMinutes => {
            if (prevMinutes === 59) {
              setHours(prevHours => prevHours + 1);
              return 0;
            } else {
              return prevMinutes + 1;
            }
          });
          return 0;
        } else {
          return prevSeconds + 1;
        }
      });
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, []);

  const Stop = () => {
    clearInterval(timerRef.current);
  };
  const Reset = () => {
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  };
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={styles.title}>Time</Text>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 20,
          marginTop: 20,
          color: 'plum',
        }}>
        {new Date().toDateString()}
      </Text>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 20,
          marginTop: 20,
          color: 'skyblue',
        }}>
        {new Date().toLocaleTimeString()}
      </Text>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleDateConfirm}
        onCancel={hideDatePicker}
      />
      <DateTimePickerModal
        isVisible={isTimePickerVisible}
        mode="time"
        onConfirm={handleTimeConfirm}
        onCancel={hideTimePicker}
      />
      {/* <CountDown /> */}
      <Text style={{fontSize: 20, fontWeight: 'bold', color: 'green'}}>
        {hours < 10 ? '0' + hours : hours}:
        {minutes < 10 ? '0' + minutes : minutes}:
        {seconds < 10 ? '0' + seconds : seconds}
      </Text>
      <TouchableOpacity style={styles.btn3} onPress={Reset}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>Reset</Text>
      </TouchableOpacity>
      {/* <Button style={{marginTop: 20}} title="Reset" onPress={Reset} /> */}
      {/* <Button title="LogOut" onPress={Stop} /> */}
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('Selfie')}>
        <Text style={styles.title2}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn2} onPress={Stop}>
        <Text style={styles.title2}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TimeScreen;

const styles = StyleSheet.create({
  title: {
    flex: 1,
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    color: 'black',
  },
  btn: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 100,

    paddingHorizontal: 10,
    paddingVertical: 10,

    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: 50,
  },
  title2: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    padding: 5,
  },
  btn2: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 100,
    marginTop: 5,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: 10,
  },
  btn3: {
    marginTop: 150,
    marginBottom: 10,
    backgroundColor: 'gray',
    padding: 5,
    borderRadius: 50,
  },
});
