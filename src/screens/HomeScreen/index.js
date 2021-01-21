import React, {useEffect, useState} from 'react';
import {View, FlatList, Dimensions} from 'react-native';
import {API, graphqlOperation} from 'aws-amplify';

import Post from '../../components/Post';
import posts from '../../data/posts';
import {listPosts} from '../../graphql/queries';

const HomeScreen = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await API.graphql(graphqlOperation(listPosts));
        setPosts(response.data.listPosts.items);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPosts();
  }, []);

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
