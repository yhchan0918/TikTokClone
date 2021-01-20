import React, {useState} from 'react';
import {View, Text, TouchableWithoutFeedback, Image} from 'react-native';
import Video from 'react-native-video';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';

import styles from './styles';

const Post = () => {
  const [paused, setPaused] = useState(false);
  const onPlayPausePress = () => {
    setPaused(!paused);
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPlayPausePress}>
        <View>
          <Video
            style={styles.video}
            source={{
              uri:
                'https://tiktokbucket.s3-ap-southeast-1.amazonaws.com/pexels-anastasia-shuraeva-6013206.mp4',
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
                  uri:
                    'https://media-exp1.licdn.com/dms/image/C5603AQGny5SpwxHumw/profile-displayphoto-shrink_800_800/0/1599634941866?e=1616630400&v=beta&t=5kQxrr6H-TuQa_AyK7wIuHsoSIvk-DzsckPSfREJvRc',
                }}
              />

              <View style={styles.iconContainer}>
                <AntDesign name={'hearto'} size={40} color="white" />
                <Text style={styles.statsLabel}>123</Text>
              </View>

              <View style={styles.iconContainer}>
                <FontAwesome name={'commenting'} size={40} color="white" />
                <Text style={styles.statsLabel}>123</Text>
              </View>

              <View style={styles.iconContainer}>
                <Fontisto name={'share-a'} size={35} color="white" />
                <Text style={styles.statsLabel}>123</Text>
              </View>
            </View>

            <View style={styles.bottomContainer}>
              <View>
                <Text style={styles.username}>@yhchan0918</Text>
                <Text style={styles.description}>
                  haahhaahahahhaa this is cool
                </Text>

                <View style={styles.songRow}>
                  <Entypo name={'beamed-note'} size={24} color="white" />
                  <Text style={styles.songName}>Nf- The search</Text>
                </View>
              </View>

              <Image
                style={styles.songImage}
                source={{
                  uri:
                    'https://media-exp1.licdn.com/dms/image/C5603AQGny5SpwxHumw/profile-displayphoto-shrink_800_800/0/1599634941866?e=1616630400&v=beta&t=5kQxrr6H-TuQa_AyK7wIuHsoSIvk-DzsckPSfREJvRc',
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
