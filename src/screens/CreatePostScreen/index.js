import React, {useState, useEffect, useContext} from 'react';
import {View, TouchableOpacity, TextInput, Text} from 'react-native';
import {Storage, API, graphqlOperation} from 'aws-amplify';
import {useRoute} from '@react-navigation/native';
import {v4 as uuidv4} from 'uuid';

import {createPost} from '../../graphql/mutations';
import styles from './styles';
import {AuthContext} from '../../context/auth';

const CreatePostScreen = () => {
  const [desc, setDesc] = useState('');
  const {user} = useContext(AuthContext);
  console.log(user);
  const [videoKey, setVideoKey] = useState(null);
  const route = useRoute();
  const uploadToStorage = async (imgPath) => {
    try {
      const response = await fetch(imgPath);
      const blob = await response.blob();
      const filename = `${uuidv4()}.mp4`;
      const s3Response = await Storage.put(filename, blob);
      setVideoKey(s3Response.key);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    // uploadToStorage(route.params.videoUri);
  }, []);

  const onPublish = async () => {
    if (!videoKey) {
      console.warn('Video is not yet uploaded');
      return;
    }
    const newPost = {
      videoUri: videoKey,
      description: desc,
      userID: user.attributes.sub,
      songID: '6a2c7f1e-5dd7-46b3-b992-e5457eea4eab', // default songID
    };
    try {
      const response = API.graphql(
        graphqlOperation(createPost, {input: newPost}),
      );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <TextInput
        value={desc}
        onChangeText={(text) => setDesc(text)}
        numberOfLines={4}
        placeholder={'Description'}
        style={styles.input}
      />
      <TouchableOpacity onPress={onPublish}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Publish</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CreatePostScreen;
