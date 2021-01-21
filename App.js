/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {Auth, API, graphqlOperation} from 'aws-amplify';
import 'react-native-gesture-handler';
import {withAuthenticator} from 'aws-amplify-react-native';

import RootNavigation from './src/navigation';
import {createUser} from './src/graphql/mutations';

const App: () => React$Node = () => {
  useEffect(() => {
    const fetchUser = async () => {
      // const userInfo;
    };
  }, []);

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <RootNavigation />
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
