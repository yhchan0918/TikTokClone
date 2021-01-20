import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Post from '../../components/Post';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Post />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default HomeScreen;
