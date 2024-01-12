import {
  View,
  Text,
  TouchableOpacity,
  PermissionsAndroid,
  Image,
} from 'react-native';
import React from 'react';
import {launchCamera} from 'react-native-image-picker';
import GetLocation from 'react-native-get-location';

const Selfie = ({navigation}) => {
  const [image, setImage] = React.useState(
    'https://w7.pngwing.com/pngs/469/94/png-transparent-camera-logo-graphy-camera-text-camera-lens-rectangle.png',
  );
  const [toggle, setToggle] = React.useState(true);
  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Camera Permission',
          message: 'App needs access to your camera ',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        const result = await launchCamera({
          mediaType: 'photo',
          cameraType: 'front',
        });
        setImage(result.assets[0].uri);
        setToggle(false);
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const checkPermissionOFGps = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
        {
          title: 'Location Permission',
          message: 'App needs access to your Location',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        getCurrentLocation();
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  function getCurrentLocation() {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 60000,
    })
      .then(location => {
        console.log(location);
      })

      .catch(error => {
        const {code, message} = error;
        console.log(code, message);
      });
  }
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: 'White',
      }}>
      <Text
        style={{
          color: 'black',
          fontSize: 20,
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: 20,
        }}>
        Take a Selfie
      </Text>
      <View
        style={{
          flex: 1,
          paddingVertical: 20,
        }}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => requestCameraPermission()}
          style={{
            backgroundColor: 'lightgray',
            flex: 0.5,
            justifyContent: 'center',
            height: '100%',
            width: '100%',
            borderRadius: 20,
            alignItems: 'center',
            overflow: 'hidden',
            marginBottom: 20,
            padding: 10,
          }}>
          <Image
            source={{uri: image}}
            style={{flex: 0.8, width: '100%', height: '100%', borderRadius: 20}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          disabled={toggle}
          activeOpacity={0.8}
          onPress={() => {
            navigation.navigate('Map');
          }}
          style={{
            backgroundColor: toggle ? 'lightgray' : 'black',
            padding: 10,
            borderRadius: 10,
            marginTop: 20,
          }}>
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: 20,
            }}>
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Selfie;
