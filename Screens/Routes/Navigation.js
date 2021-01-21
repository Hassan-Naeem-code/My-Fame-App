import React, {useEffect} from 'react';
// import {Alert} from 'react-native';
import auth from '@react-native-firebase/auth';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SignUp from '../Sign Up/SignUp';
import Login from '../Log In/LogIn';
import Home from '../Home/Home';
import NewsFeed from '../news_feed/NewFeed';
import UserProfile from '../user_profile/UserProfile';
import HomePage from '../Home/HomePage';
import Search from '../Search/Search';
import Upload from '../upload/Upload';
import SignupInfo from '../Sign Up/SignupInfo';
import SignupInfoSecond from '../Sign Up/SignupInfoSecond';
import LoginInfo from '../Log In/LoginInfo';
import Splash from '../Splash Screen/splash';
import ForgotPassword from '../Log In/ForgotPassword';
import UploadVideo from '../upload/uploadVideo';
import {useDispatch, useSelector} from 'react-redux';
import {fetchUserInfo} from '../../Store/actions/auth';
const Stack = createStackNavigator();
const {Screen, Navigator} = Stack;
const Navigation = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    auth().onAuthStateChanged((user) => {
      if (user) {
        console.log('Auth user.................................', user);
        console.log('Auth user.................................', user.uid);
        dispatch(fetchUserInfo(user.uid));
      }
    });
  }, []);

  const getState = useSelector(({auth}) => auth.auth);
  console.log('Get State from redux', getState);
  return (
    <NavigationContainer>
      <Navigator>
        {getState ? (
          <>
            <Screen
              name="HomePage"
              component={HomePage}
              options={{headerShown: false}}
            />
            <Screen
              name="Home"
              component={Home}
              options={{headerShown: false}}
            />
            <Screen
              name="Search"
              component={Search}
              options={{headerShown: false}}
            />
            <Screen
              name="Upload"
              component={Upload}
              options={{headerShown: false}}
            />
            <Screen
              name="NewsFeed"
              component={NewsFeed}
              options={{headerShown: false}}
            />
            <Screen name="UserProfile" component={UserProfile} />
            <Screen name="UploadVideo" component={UploadVideo} />
            <Screen
              name="Splash"
              component={Splash}
              options={{headerShown: false}}
            />
          </>
        ) : (
          <>
            <Screen
              name={'SignUp'}
              component={SignUp}
              options={{headerShown: false}}
            />
            <Screen
              name="SignupInfo"
              component={SignupInfo}
              options={{
                title: 'Sign up',
                headerStyle: {
                  backgroundColor: '#ffffff',
                },
                headerTintColor: '#000000',
                headerTitleStyle: {
                  fontWeight: '600',
                },
              }}
            />
            <Screen
              name="SignupInfoSecond"
              component={SignupInfoSecond}
              options={{
                title: 'Sign up',
                headerStyle: {
                  backgroundColor: '#ffffff',
                },
                headerTintColor: '#000000',
                headerTitleStyle: {
                  fontWeight: '600',
                },
              }}
            />
            <Screen
              name="LogIn"
              component={Login}
              options={{headerShown: false}}
            />
            <Screen
              name="LoginInfo"
              component={LoginInfo}
              options={{
                title: 'Log In',
                headerStyle: {
                  backgroundColor: '#ffffff',
                },
                headerTintColor: '#000000',
                headerTitleStyle: {
                  fontWeight: '600',
                },
              }}
            />
            <Screen
              name="ForgotPassword"
              component={ForgotPassword}
              options={{
                title: 'Forgot Password',
                headerStyle: {
                  backgroundColor: '#ffffff',
                },
                headerTintColor: '#000000',
                headerTitleStyle: {
                  fontWeight: '600',
                },
              }}
            />
          </>
        )}
      </Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
