import React, {useEffect, useState, useContext} from 'react';
import {View, FlatList, Dimensions} from 'react-native';
import {Auth, API, graphqlOperation} from 'aws-amplify';

import Post from '../../components/Post';
import {AuthContext} from '../../context/auth';
import {createUser} from '../../graphql/mutations';
import {listPosts, getUser} from '../../graphql/queries';

const HomeScreen = () => {
  const context = useContext(AuthContext);

  useEffect(() => {
    const fetchUser = async () => {
      // get current authenticated user
      const userInfo = await Auth.currentAuthenticatedUser({bypassCache: true});

      if (!userInfo) {
        return;
      }
      context.login(userInfo);

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
