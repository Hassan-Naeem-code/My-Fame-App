import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {LoginManager, AccessToken} from 'react-native-fbsdk';
import {GoogleSignin} from '@react-native-community/google-signin';
import {USER_REGISTERED, USER_LOGGED_OUT} from '../constants/actiontypes';
import {ToastAndroid} from 'react-native';

// ...

// Attempt a login using the Facebook login dialog asking for default permissions.

export function loginWithFacebook() {
  return async (dispatch) => {
    const result = await LoginManager.logInWithPermissions([
      'public_profile',
      'email',
    ]);

    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }

    // Once signed in, get the users AccesToken
    const data = await AccessToken.getCurrentAccessToken();

    if (!data) {
      throw 'Something went wrong obtaining access token';
    }

    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(
      data.accessToken,
    );

    // Sign-in the user with the credential
    auth()
      .signInWithCredential(facebookCredential)
      .then((success) => {
        let user = {
          name: success.user.displayName,
          email: success.user.email,
          pic: success.user.photoURL,
          uid: success.user.uid,
        };
        firestore()
          .collection('users')
          .add(user)
          .then((doc) => {
            ToastAndroid.show('Successfully Signed Up...', 2000);
            dispatch({
              type: USER_REGISTERED,
              payload: user,
            });
          })
          .catch((error) => {
            ToastAndroid.show('Unsuccessfull Signed Up...', 2000);
          });
      })
      .catch((error) => {
        console.log('Error==>', error);
      });
  };
}

export function loginUserWithFacebook() {
  return async (dispatch) => {
    const result = await LoginManager.logInWithPermissions([
      'public_profile',
      'email',
    ]);

    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }

    // Once signed in, get the users AccesToken
    const data = await AccessToken.getCurrentAccessToken();

    if (!data) {
      throw 'Something went wrong obtaining access token';
    }

    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(
      data.accessToken,
    );

    // Sign-in the user with the credential
    auth()
      .signInWithCredential(facebookCredential)
      .then((success) => {
        ToastAndroid.show('Successfully Signed In...', 2000);
      })
      .catch((error) => {
        ToastAndroid.show('Unsuccessfull Signed In...', 2000);
      });
  };
}

export function loginWithGoogle() {
  return async (dispatch) => {
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    auth()
      .signInWithCredential(googleCredential)
      .then((success) => {
        let user = {
          name: success.user.displayName,
          email: success.user.email,
          pic: success.user.photoURL,
          uid: success.user.uid,
        };
        firestore()
          .collection('users')
          .add(user)
          .then((doc) => {
            ToastAndroid.show('Successfully Signed Up...', 2000);
            dispatch({
              type: USER_REGISTERED,
              payload: user,
            });
          })
          .catch((error) => {
            ToastAndroid.show('Unsuccessfull Signed Up...', 2000);
          });
        console.log('Success', success);
      })
      .catch((error) => {
        console.log('Error==>', error);
      });
  };
}

export function loginUserWithGoogle() {
  return async (dispatch) => {
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    auth()
      .signInWithCredential(googleCredential)
      .then((success) => {
        ToastAndroid.show('Successfully Signed In...', 2000);
      })
      .catch((error) => {
        ToastAndroid.show('Unsuccessfull Signed In...', 2000);
      });
  };
}

export function signUpUserEmailPassword(user) {
  return (dispatch) => {
    auth()
      .createUserWithEmailAndPassword(user.email, user.password)
      .then((success) => {
        delete user.password;
        user.uid = success.user.uid;
        firestore()
          .collection('users')
          .add(user)
          .then((doc) => {
            ToastAndroid.show('Successfully Signed Up...', 2000);
            dispatch({
              type: USER_REGISTERED,
              payload: user,
            });
          })
          .catch((error) => {
            ToastAndroid.show('Unsuccessfull Signed Up...', 2000);
          });
      })

      .catch((error) => {});
  };
}

export function logInUserEmailPassword(user) {
  return (dispatch) => {
    auth()
      .signInWithEmailAndPassword(user.email, user.password)
      .then((success) => {
        ToastAndroid.show('Successfully Signed In...', 2000);
      })
      .catch((error) => {
        ToastAndroid.show('Unsuccessfull Signed In...', 2000);
      });
  };
}

export function forgotPasswordEmailSubmission(email) {
  return (dispatch) => {
    auth()
      .sendPasswordResetEmail(email)
      .then((success) => {
        ToastAndroid.show('Successfull Attempt', 2000);
      })
      .catch((error) => {
        ToastAndroid.show('UnSuccessfull Attempt', 2000);
      });
  };
}

export function signOut() {
  return (dispatch) => {
    auth()
      .signOut()
      .then(() => {
        dispatch({
          type: USER_LOGGED_OUT,
        });
      });
  };
}

export function fetchUserInfo(uid) {
  return async (dispatch) => {
    let userFound = await firestore()
      .collection('users')
      .where('uid', '==', uid)
      .get();
    userFound.forEach(function (doc) {
      dispatch({type: USER_REGISTERED, payload: doc.data()});
    });
  };
}
