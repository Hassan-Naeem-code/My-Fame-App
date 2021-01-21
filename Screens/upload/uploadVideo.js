import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import Video from 'react-native-video';
import {useDispatch} from 'react-redux';
import {signOut} from '../../Store/actions/auth';

const Uploadvideo = ({navigation,route}) => {
  const dispatch = useDispatch();
  const {videoRecipient} = route.params;
  const [videoPause, setVideoPause] = useState(false);
  const onPlayPausePress = () => {
    setVideoPause(!videoPause);
  };
  const userLoggedOut = () => {
    dispatch(signOut());
  };
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <TouchableWithoutFeedback onPress={onPlayPausePress}>
        <Video
          source={{
            uri: videoRecipient,
          }}
          resizeMode="cover"
          onError={(error) => {
            console.log('Error is:', error);
          }}
          paused={videoPause}
          controls={true}
          pictureInPicture={true}
          style={styles.video}
        />
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Uploadvideo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: Dimensions.get('window').height,
  },
  video: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  
});
