import React, {useEffect} from 'react';
import {View, Text, SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

const UserProfile = () => {
  const getState = useSelector(({auth}) => auth.auth);
  console.log('Data of Current User From Redux we get:', getState);
  // useEffect(() => {
  //   console.log('Data of Current User From Redux we get:', userData);
  // }, []);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#1c1c1c" style="light" />
      <View>
        {/* <Text>Test User Screen Yayy......</Text> */}
      </View>
    </SafeAreaView>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
