import React, {useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  ScrollView,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import RBSheet from 'react-native-raw-bottom-sheet';
import {
  loginUserWithFacebook,
  loginUserWithGoogle,
} from '../../Store/actions/auth';

export default function LogIn({navigation}) {
  const refRBSheet = useRef();
  const getState = useSelector(({auth}) => {
    return auth.auth;
  });
  const dispatch = useDispatch();

  const loginUserFb = () => {
    dispatch(loginUserWithFacebook());
  };
  const loginUserGoogle = () => {
    dispatch(loginUserWithGoogle());
  };
  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.subPartContainerFlexEnd}>
          <TouchableOpacity onPress={() => refRBSheet.current.open()}>
            <View style={styles.roundQuestionCircle}>
              <FontAwesome
                name={'question'}
                size={16}
                style={{color: 'white', textAlign: 'center'}}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.subPartContainerFlexEnd}></View>
      </View>

      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        openDuration={250}
        height={400}
        dragFromTopOnly={true}
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
              <Text style={{color: 'gray', fontSize: 25, textAlign: 'center'}}>
                Queries....
              </Text>
              <FontAwesome
                name={'remove'}
                size={16}
                style={{color: 'white', textAlign: 'center'}}
              />
              <ScrollView>
                <Text style={{fontSize: 15}}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum. It has
                  survived not only five centuries, but also the leap into
                  electronic typesetting, remaining essentially unchanged. It
                  was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker including
                  versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of
                  the printing and typesetting industry. Lorem Ipsum has been
                  the industry's standard dummy text ever since the 1500s, when
                  an unknown printer took a galley of type and scrambled it to
                  make a type specimen book. It has survived not only five
                  centuries, but also the leap into electronic typesetting,
                  remaining essentially unchanged. It was popularised in the
                  1960s with the release of Letraset sheets containing Lorem
                  Ipsum passages, and more recently with desktop publishing
                  software like Aldus PageMaker including versions of Lorem
                  Ipsum. It has survived not only five centuries, but also the
                  leap into electronic typesetting, remaining essentially
                  unchanged. It was popularised in the 1960s with the release of
                  Letraset sheets containing Lorem Ipsum passages, and more
                  recently with desktop publishing software like Aldus PageMaker
                  including versions of Lorem Ipsum.
                </Text>
              </ScrollView>
            </View>
            <View style={{flex: 1}}></View>
          </View>
          <View style={{flex: 1}}></View>
        </View>

        {/* <YourOwnComponent /> */}
      </RBSheet>

      {/* SOCIAL LOGIN STARTS */}
      <View style={styles.containerSecond}>
        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.mainHeadingSignUp}>Log In for My Fame</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.columnSecond}>
            <Text style={styles.subHeading}>
              Create a profile, follow other accounts, make your own videos, and
              more.
            </Text>
          </View>
        </View>
        {/* SIGN UP WITH PHONE OR EMAIL STARTS */}
        <View style={styles.row}>
          <View style={styles.columnSecond}>
            <TouchableOpacity onPress={() => navigation.navigate('LoginInfo')}>
              <View
                style={{
                  marginTop: 20,
                  width: 160 * 2,
                  height: 40,
                  backgroundColor: 'rgb(255,255,255)',
                  flexDirection: 'row',
                  borderColor: 'lightgray',
                  borderWidth: 1,
                }}>
                <View
                  style={{
                    flex: 2,
                    flexDirection: 'column',
                    marginTop: 6,
                    marginLeft: 7,
                  }}>
                  <View style={styles.roundFacebookCircle}>
                    <FontAwesome
                      name={'envelope-o'}
                      size={16}
                      style={{color: 'white', textAlign: 'center'}}
                    />
                  </View>
                </View>
                <View
                  style={{flex: 5, flexDirection: 'column', marginVertical: 6}}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 'bold',
                      textAlign: 'left',
                    }}>
                    Use Email & Password
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* SIGN UP WITH PHONE OR EMAIL ENDS */}

        {/* SIGN UP WITH FACEBOOK STARTS */}

        <View style={styles.row}>
          <View style={styles.columnSecond}>
            <TouchableOpacity onPress={loginUserFb}>
              <View
                style={{
                  marginTop: 20,
                  width: 160 * 2,
                  height: 40,
                  backgroundColor: 'rgb(255,255,255)',
                  flexDirection: 'row',
                  borderColor: 'lightgray',
                  borderWidth: 1,
                }}>
                <View
                  style={{
                    flex: 2,
                    flexDirection: 'column',
                    marginTop: 6,
                    marginLeft: 6,
                  }}>
                  <View style={styles.roundFacebookCircle}>
                    <FontAwesome
                      name={'facebook-f'}
                      size={16}
                      style={{color: 'white', textAlign: 'center'}}
                    />
                  </View>
                </View>
                <View
                  style={{flex: 5, flexDirection: 'column', marginVertical: 6}}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 'bold',
                      textAlign: 'left',
                    }}>
                    Continue with Facebook
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* SIGN UP WITH FACEBOOK ENDS */}

        {/* SIGN UP WITH GOOGLE STARTS */}
        <View style={styles.row}>
          <View style={styles.columnSecond}>
            <TouchableOpacity onPress={loginUserGoogle}>
              <View
                style={{
                  marginTop: 20,
                  width: 160 * 2,
                  height: 40,
                  backgroundColor: 'rgb(255,255,255)',
                  flexDirection: 'row',
                  borderColor: 'lightgray',
                  borderWidth: 1,
                }}>
                <View
                  style={{
                    flex: 2,
                    flexDirection: 'column',
                    marginTop: 6,
                    marginLeft: 6,
                  }}>
                  <View style={styles.roundFacebookCircle}>
                    <FontAwesome
                      name={'google'}
                      size={16}
                      style={{color: 'white', textAlign: 'center'}}
                    />
                  </View>
                </View>
                <View
                  style={{flex: 5, flexDirection: 'column', marginVertical: 6}}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 'bold',
                      textAlign: 'left',
                    }}>
                    Continue with Google
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* SIGN UP WITH GOOGLE ENDS */}

        {/* SIGN UP WITH TWITTER STARTS */}

        <View style={styles.row}>
          <View style={styles.columnSecond}>
            <View
              style={{
                marginTop: 20,
                width: 160 * 2,
                height: 40,
                backgroundColor: 'rgb(255,255,255)',
                flexDirection: 'row',
                borderColor: 'lightgray',
                borderWidth: 1,
              }}>
              <View
                style={{
                  flex: 2,
                  flexDirection: 'column',
                  marginTop: 6,
                  marginLeft: 6,
                }}>
                <View style={styles.roundTwiterCircle}>
                  <FontAwesome
                    name={'twitter'}
                    size={16}
                    style={{color: 'white', textAlign: 'center'}}
                  />
                </View>
              </View>
              <View
                style={{flex: 5, flexDirection: 'column', marginVertical: 6}}>
                <Text
                  style={{fontSize: 16, fontWeight: 'bold', textAlign: 'left'}}>
                  Continue with Twitter
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* SIGN UP WITH APPLE STARTS */}

        {Platform.OS === 'ios' ? (
          <View style={styles.row}>
            <View style={styles.columnSecond}>
              <View
                style={{
                  marginTop: 20,
                  width: 160 * 2,
                  height: 40,
                  backgroundColor: 'rgb(255,255,255)',
                  flexDirection: 'row',
                  borderColor: 'lightgray',
                  borderWidth: 1,
                }}>
                <View
                  style={{
                    flex: 2,
                    flexDirection: 'column',
                    marginTop: 6,
                    marginLeft: 6,
                  }}>
                  <View style={styles.roundFacebookCircle}>
                    <FontAwesome
                      name={'apple'}
                      size={16}
                      style={{color: 'white', textAlign: 'center'}}
                    />
                  </View>
                </View>
                <View
                  style={{flex: 5, flexDirection: 'column', marginVertical: 6}}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 'bold',
                      textAlign: 'left',
                    }}>
                    Continue with Apple
                  </Text>
                </View>
              </View>
            </View>
          </View>
        ) : null}

        {/* SIGN UP WITH APPLE ENDS*/}

        <View
          style={{
            flexDirection: 'row',
            marginVertical: 55,
            marginHorizontal: 25,
          }}>
          <View
            style={{
              flexDirection: 'row',
              flex: 5,
              justifyContent: 'center',
            }}>
            <Text
              style={{color: 'lightgray', fontSize: 13, textAlign: 'center'}}>
              By continuing, you agree to MyFame's Terms of Use and confirm that
              you have read MyFame Privacy Policy.
            </Text>
          </View>
        </View>
      </View>

      {/* SOCILA LOGIN ENDS */}

      {/* FOOTER STARTS */}
      <View style={styles.containerThird}>
        <View style={styles.row}>
          <View style={styles.column}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('SignUp');
              }}>
              <Text
                style={{fontSize: 16, fontWeight: 'bold', marginVertical: 10}}>
                Don't have an account? <Text></Text>
                <Text style={{color: 'red', fontSize: 18, fontWeight: 'bold'}}>
                  SignUp
                </Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* FOOTER ENDS */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(255, 255, 255)',
  },
  containerSecond: {
    flex: 5,
    backgroundColor: 'rgb(255, 255, 255)',
  },
  containerThird: {
    flex: 1,
    backgroundColor: 'rgb(248,248,248)',
  },

  subPartContainerFlexEnd: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    flex: 7,
    marginRight: 7,
  },
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'row',
    flex: 5,
    justifyContent: 'center',
  },
  columnSecond: {
    flexDirection: 'row',
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  roundQuestionCircle: {
    width: 25,
    borderRadius: 15,
    backgroundColor: 'lightgray',
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 5,
    paddingRight: 5,
    textAlign: 'center',
  },
  roundFacebookCircle: {
    width: 25,
    borderRadius: 15,
    backgroundColor: '#3b5998',
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 5,
    paddingRight: 5,
    textAlign: 'center',
  },
  roundTwiterCircle: {
    width: 25,
    borderRadius: 15,
    backgroundColor: '#1DA1F2',
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 5,
    paddingRight: 5,
    textAlign: 'center',
  },
  mainHeadingSignUp: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subHeading: {
    fontWeight: '600',
    color: 'lightgray',
    fontSize: 10,
    textAlign: 'center',
    marginTop: 5,
  },
});
