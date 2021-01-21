import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import storage from '@react-native-firebase/storage';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useIsFocused} from '@react-navigation/native';
import {RNCamera} from 'react-native-camera';
import AnimatedLoader from 'react-native-animated-loader';

let profileURL;
const Upload = ({navigation}) => {
  const refRBSheet = useRef();
  const isFocused = useIsFocused();
  const [choice, setChoice] = useState(false);
  const [checkTime, setCheckTime] = useState(false);
  const [changeCam, setChangeCam] = useState(false);
  const [hasImageUri, setHasImageUri] = useState('');
  const [hasVideoUri, setHasVideoUri] = useState('');
  const [recording, setRecording] = useState(false);
  const [isVideoRecorded, setIsVideoRecorded] = useState(false);
  useEffect(() => {
    if (isFocused) {
      refRBSheet.current.open();
    }
  }, []);
  let takePicture = async function (camera) {
    const options = {quality: 0.5, base64: true};

    const data = await camera.takePicture(options);
    //  eslint-disable-next-line
    console.log(data.uri);
    // onRecordingStart();
    setHasImageUri(data.uri);
    refRBSheet.current.close();
  };
  let takeVideo = async function (camera) {
    const options = {quality: 0.5, maxDuration: 12, base64: true};
    setRecording(true);
    const data = await camera.recordAsync(options);
    //  eslint-disable-next-line
    setIsVideoRecorded(true);
    console.log(data.uri);
    let videoName = Date.now();
    let videoPath = data.uri;
    setHasVideoUri(videoPath);
    refRBSheet.current.close();
    let updatevideoPath = await fetch(videoPath);
    const blob = await updatevideoPath.blob();
    let videoRef = storage().ref().child(`Profile Images/${videoName}`);
    let result = await videoRef.put(blob);
    let getURL = await videoRef.getDownloadURL();
    setIsVideoRecorded(false);
    profileURL = getURL;

    navigation.navigate('UploadVideo', {videoRecipient: profileURL});

    // onRecordingStart();
  };

  const stopRecording = (camera) => {
    camera.stopRecording();
    setRecording(true);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
      }}>
      {isFocused ? (
        <RBSheet
          ref={refRBSheet}
          closeOnDragDown={true}
          closeOnPressMask={false}
          openDuration={250}
          height={230}
          dragFromTopOnly={true}
          max
          customStyles={{
            container: {
              borderRadius: 22,
            },
            wrapper: {
              backgroundColor: '#00000050',
            },
            draggableIcon: {
              backgroundColor: '#000',
            },
          }}>
          <View style={{flex: 1}}>
            <View style={{flexDirection: 'row'}}>
              <View style={{flex: 1}}></View>
              <View style={{flex: 5}}>
                <TouchableOpacity
                  style={styles.photoBtn}
                  onPress={() => {
                    setCheckTime(true);
                    refRBSheet.current.close();
                  }}>
                  <Text style={styles.textBtn}>
                    <FontAwesome
                      name={'picture-o'}
                      size={25}
                      style={{
                        color: 'white',
                        textAlign: 'center',
                      }}
                    />
                    Take A Photo
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.photoBtn}
                  onPress={() => {
                    setCheckTime(true);
                    refRBSheet.current.close();
                  }}>
                  <Text style={styles.textBtn}>
                    <FontAwesome
                      name={'video-camera'}
                      size={25}
                      style={{
                        color: 'white',
                        textAlign: 'center',
                      }}
                    />
                    Take A Video
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{flex: 1}}></View>
            </View>
            <View style={{flex: 1}}></View>
          </View>

          {/* <YourOwnComponent /> */}
        </RBSheet>
      ) : null}
      {checkTime ? (
        <View style={styles.container}>
          <RNCamera
            style={styles.preview}
            type={
              changeCam
                ? RNCamera.Constants.Type.front
                : RNCamera.Constants.Type.back
            }
            playSoundOnRecord={true}
            defaultVideoQuality={RNCamera.Constants.VideoQuality['1080p']}
            useNativeZoom={true}
            playSoundOnCapture={true}
            flashMode={RNCamera.Constants.FlashMode.on}
            onTap={() => {
              setChangeCam(!changeCam);
            }}
            androidCameraPermissionOptions={{
              title: 'Permission to use camera',
              message: 'We need your permission to use your camera',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
            androidRecordAudioPermissionOptions={{
              title: 'Permission to use audio recording',
              message: 'We need your permission to use your audio',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}>
            {({camera, status, recordAudioPermissionStatus}) => {
              if (status !== 'READY') return null;
              return (
                <View
                  style={{
                    flex: 0,
                    flexDirection: 'row',
                    justifyContent: 'center',
                  }}>
                  {!recording ? (
                    <TouchableOpacity
                      onPress={() => takeVideo(camera)}
                      style={styles.capture}>
                      <Text style={{fontSize: 14}}> SNAP </Text>
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity
                      onPress={() => stopRecording(camera)}
                      style={styles.capture}>
                      <Text style={{fontSize: 14}}> STOP </Text>
                    </TouchableOpacity>
                  )}

                  <View>
                    <TouchableOpacity
                      onPress={() => {
                        setChangeCam(!changeCam);
                        refRBSheet.current.close();
                      }}>
                      <MaterialIcons
                        name={'published-with-changes'}
                        size={25}
                        style={{
                          color: 'white',
                          textAlign: 'center',
                        }}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              );
            }}
          </RNCamera>
        </View>
      ) : null}
     
        <AnimatedLoader
          visible={isVideoRecorded}
          overlayColor="rgba(255,255,255,0.75)"
          source={require('../../Loader/nfc.json')}
          animationStyle={styles.lottie}
          speed={1}>
        
        </AnimatedLoader>
     
    </View>
  );
};

export default Upload;

const styles = StyleSheet.create({
  photoBtn: {
    backgroundColor: '#03A9F4',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 17,
    padding: 17,
    borderRadius: 10,
  },
  textBtn: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
  scrollView: {
    backgroundColor: 'white',
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: 'white',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
  },
  btnCapture: {
    width: 200,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
    borderRadius: 25,
  },
  lottie: {
    width: '100%',
    height: '100%',
  },
});
