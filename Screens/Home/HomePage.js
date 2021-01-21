import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import NewsFeed from '../news_feed/NewFeed';
import UserProfile from '../user_profile/UserProfile';
import Home from '../Home/Home';
import Search from '../Search/Search';
import Upload from '../upload/Upload';
const Tab = createBottomTabNavigator();
const {Screen, Navigator} = Tab;
const HomePage = () => {
  return (
    <Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'Search') {
            iconName = focused ? 'search' : 'search';
          } else if (route.name === 'Upload') {
            iconName = focused ? 'plus-square' : 'plus-square-o';
          } else if (route.name === 'NewsFeed') {
            iconName = focused ? 'folder' : 'folder-o';
          } else if (route.name === 'UserProfile') {
            iconName = focused ? 'user' : 'user-o';
          }

          // You can return any component that you like here!
          return <FontAwesome name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#fff',
        inactiveTintColor: 'gray',
        tabStyle: {
          backgroundColor: 'rgba(0,0,0,0.8)',
          borderColor: 'black',
        },
      }}>
      <Screen name="Home" component={Home} />
      <Screen name="Search" component={Search} />
      <Screen name="Upload" component={Upload} />
      <Screen name="NewsFeed" component={NewsFeed} />
      <Screen name="UserProfile" component={UserProfile} />
    </Navigator>
  );
};

export default HomePage;
