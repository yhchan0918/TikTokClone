import React from 'react';
import {View, Text, StyleSheet, FlatList, Dimensions} from 'react-native';
import Post from '../../components/Post';
import posts from '../../data/posts';

const HomeScreen = () => {
  return (
    <View>
      <FlatList
        data={posts}
        renderItem={({item}) => <Post post={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        snapToInterval={Dimensions.get('window').height - 130}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
      />
    </View>
  );
};

export default HomeScreen;
