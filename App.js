/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useContext} from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import 'react-native-gesture-handler';
import {withAuthenticator} from 'aws-amplify-react-native';

import RootNavigation from './src/navigation';
import {AuthProvider} from './src/context/auth';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <AuthProvider>
        <SafeAreaView style={styles.container}>
          <RootNavigation />
        </SafeAreaView>
      </AuthProvider>
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
