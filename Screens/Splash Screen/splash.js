import React, {useEffect} from 'react';
import {View, Image, StyleSheet,Text} from 'react-native';
import {useSelector} from 'react-redux';

const splash = ({navigation}) => {
  const getState = useSelector(({auth}) => auth.auth);
  useEffect(() => {
    console.log("nahjjsdvsd",navigation);
    // setTimeout(() => {
    //   getState
    //     ? navigation.navigate('HomePage')
    //     : navigation.navigate('SignUp');
    // }, 2500);
  }, []);
  return (
    <View style={styles.container}>
      <Image
        source={require('../../Images/Splash Screen/myfame_splash.png')}
        style={styles.backgroundImage}
      />
      <Text>Jhajifcsivdsfvdfv</Text>
    </View>
  );
};

export default splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
  },
  loginForm: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});
