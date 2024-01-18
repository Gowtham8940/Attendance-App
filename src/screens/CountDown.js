// import {Button, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
// import React, {useEffect, useRef, useState} from 'react';

// const CountDown = ({navigation}) => {
//   const [hours, setHours] = useState(0);
//   const [minutes, setMinutes] = useState(0);
//   const [seconds, setSeconds] = useState(0);

//   const timerRef = useRef(null);

//   useEffect(() => {
//     timerRef.current = setInterval(() => {
//       setSeconds(prevSeconds => {
//         if (prevSeconds === 59) {
//           setMinutes(prevMinutes => {
//             if (prevMinutes === 59) {
//               setHours(prevHours => prevHours + 1);
//               return 0;
//             } else {
//               return prevMinutes + 1;
//             }
//           });
//           return 0;
//         } else {
//           return prevSeconds + 1;
//         }
//       });
//     }, 1000);

//     return () => clearInterval(timerRef.current);
//   }, []);

//   const Stop = () => {
//     clearInterval(timerRef.current);
//   };
//   const Reset = () => {
//     setHours(0);
//     setMinutes(0);
//     setSeconds(0);
//   };

//   return (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <Text style={{fontSize: 20, fontWeight: 'bold', color: 'green'}}>
//         {hours < 10 ? '0' + hours : hours}:
//         {minutes < 10 ? '0' + minutes : minutes}:
//         {seconds < 10 ? '0' + seconds : seconds}
//       </Text>
//       <Button title="Reset" onPress={Reset} />
//       <Button title="LogOut" onPress={Stop} />

//     </View>
//   );
// };
// export default CountDown;
