import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeBottomTabNavigator from './homeBottomTabNavigator';
import CreatePostScreen from '../screens/CreatePostScreen';

const Stack = createStackNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeBottomTabNavigator} />
        <Stack.Screen
          name="CreatePost"
          component={CreatePostScreen}
          options={{headerShown: true, title: 'Post'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
