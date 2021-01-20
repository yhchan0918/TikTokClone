import React, {useState, useCallback} from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Image,
  TouchableOpacity,
} from 'react-native';
import Video from 'react-native-video';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';

import styles from './styles';

const Post = (props) => {
  const {post} = props;
  const [paused, setPaused] = useState(false);
  const [isLiked, setisLiked] = useState(false);
  const [currentPost, setCurrentPost] = useState(post);
  const onPlayPausePress = () => {
    setPaused(!paused);
  };
  console.log('rendered');
  const onLikePress = () => {
    const likedToAdd = isLiked ? -1 : 1;

    setCurrentPost({...currentPost, likes: currentPost.likes + likedToAdd});
    setisLiked(!isLiked);
  };
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPlayPausePress}>
        <View>
          <Video
            style={styles.video}
            source={{
              uri: currentPost.videoUri,
            }}
            resizeMode={'cover'}
            onError={(e) => console.log(e)}
            repeat={true}
            paused={paused}
          />
          <View style={styles.uiContainer}>
            <View style={styles.rightContainer}>
              <Image
                style={styles.profilePicture}
                source={{
                  uri: currentPost.user.imageUri,
                }}
              />
              <TouchableOpacity onPress={onLikePress}>
                <View style={styles.iconContainer}>
                  <AntDesign
                    name={'heart'}
                    size={40}
                    color={isLiked ? 'red' : 'white'}
                  />
                  <Text style={styles.statsLabel}>{currentPost.likes}</Text>
                </View>
              </TouchableOpacity>

              <View style={styles.iconContainer}>
                <FontAwesome name={'commenting'} size={40} color="white" />
                <Text style={styles.statsLabel}>{currentPost.comments}</Text>
              </View>

              <View style={styles.iconContainer}>
                <Fontisto name={'share-a'} size={35} color="white" />
                <Text style={styles.statsLabel}>{currentPost.shares}</Text>
              </View>
            </View>

            <View style={styles.bottomContainer}>
              <View>
                <Text style={styles.username}>{currentPost.user.username}</Text>
                <Text style={styles.description}>
                  {currentPost.description}
                </Text>

                <View style={styles.songRow}>
                  <Entypo name={'beamed-note'} size={24} color="white" />
                  <Text style={styles.songName}>{currentPost.songName}</Text>
                </View>
              </View>

              <Image
                style={styles.songImage}
                source={{
                  uri: currentPost.songImage,
                }}
              />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Post;