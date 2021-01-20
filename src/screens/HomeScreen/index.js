import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Post from '../../components/Post';
import posts from '../../data/posts';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Post post={posts[0]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default HomeScreen;
