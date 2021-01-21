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
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {useDispatch} from 'react-redux';
import {signOut} from '../../Store/actions/auth';

const Home = () => {
  const dispatch = useDispatch();
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
            uri: 'https://www.w3schools.com/html/mov_bbb.mp4',
          }}
          resizeMode="cover"
          onError={(error) => {
            console.log('Error is:', error);
          }}
          repeat={true}
          paused={videoPause}
          style={styles.video}
        />
      </TouchableWithoutFeedback>
      <View style={styles.bottomContainer}>
        <View style={styles.sideContainer}>
          <Image
            source={{
              uri:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEpOB50Gf-839DMNoHRlYYBAWP0TN73RHsGg&usqp=CAU',
            }}
            style={styles.profilePicture}
          />
          <View style={styles.iconContainer}>
            <TouchableOpacity onPress={userLoggedOut}>
              <FontAwesome name={'heart-o'} size={40} color="white" />
            </TouchableOpacity>
            <Text style={styles.userLabel}>3.312</Text>
          </View>
          <View style={styles.iconContainer}>
            <FontAwesome name={'commenting'} size={40} color="white" />
            <Text style={styles.userLabel}>3.312</Text>
          </View>
          <View style={styles.iconContainer}>
            <Fontisto name={'share-a'} size={35} color="white" />
            <Text style={styles.userLabel}>3.312</Text>
          </View>
        </View>
        <View style={styles.mainBottomContainer}>
          <View>
            <Text style={styles.handle}>@davidoberack</Text>
            <Text style={styles.description}>I am the bootom View point</Text>
            <View style={styles.songRow}>
              <Entypo name={'beamed-note'} size={24} color="white" />
              <Text style={styles.songName}>Nf - The search</Text>
            </View>
          </View>
          <Image
            source={{
              uri:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEpOB50Gf-839DMNoHRlYYBAWP0TN73RHsGg&usqp=CAU',
            }}
            style={styles.songImage}
          />
        </View>
      </View>
    </View>
  );
};

export default Home;

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
  bottomContainer: {
    height: '100%',
    justifyContent: 'flex-end',
  },
  sideContainer: {
    alignSelf: 'flex-end',
    height: 300,
    justifyContent: 'space-between',
    marginRight: 5,
  },
  mainBottomContainer: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  handle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 10,
  },
  description: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '300',
    marginBottom: 10,
  },
  songRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  songName: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 5,
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#fff',
  },
  songImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 5,
    borderColor: '#4c4c4c',
  },
  iconContainer: {
    alignItems: 'center',
  },
  userLabel: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginTop: 4,
  },
});
