/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useContext} from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {Auth, API, graphqlOperation} from 'aws-amplify';
import 'react-native-gesture-handler';
import {withAuthenticator} from 'aws-amplify-react-native';

import RootNavigation from './src/navigation';
import {createUser} from './src/graphql/mutations';
import {getUser} from './src/graphql/queries';
import {AuthContext, AuthProvider} from './src/context/auth';

const App: () => React$Node = () => {
  const {login} = useContext(AuthContext);
  useEffect(() => {
    const fetchUser = async () => {
      // get current authenticated user
      const userInfo = await Auth.currentAuthenticatedUser({bypassCache: true});

      if (!userInfo) {
        return;
      }
      login(userInfo);
      // check if the user exist in database
      const getUserResponse = await API.graphql(
        graphqlOperation(getUser, {id: userInfo.attributes.sub}),
      );
      if (getUserResponse.data.getUser) {
        console.log('User exist in database');
        return;
      }
      // if not then its a new registered user then create a new user in database
      const newUser = {
        id: userInfo.attributes.sub,
        username: userInfo.username,
        email: userInfo.attributes.email,
        imageUri:
          'https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg', // default profile picture
      };
      await API.graphql(graphqlOperation(createUser, {input: newUser}));
    };
    fetchUser();
  }, []);

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <AuthProvider>
          <RootNavigation />
        </AuthProvider>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});

export default withAuthenticator(App);
