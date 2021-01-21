import {useNavigation} from '@react-navigation/native';
import React, {useState, useRef} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {RNCamera} from 'react-native-camera';
import styles from './styles';

const CameraScreen = () => {
  const [isRecording, setIsRecording] = useState(false);
  const camera = useRef();
  const navigation = useNavigation();

  const onRecord = async () => {
    if (isRecording) {
      camera.current.stopRecording();
    } else {
      const data = await camera.current.recordAsync();
      navigation.navigate('CreatePost', {videoUri: data.uri});
    }
  };

  return (
    <View style={styles.container}>
      <RNCamera
        ref={camera}
        style={styles.preview}
        onRecordingStart={() => setIsRecording(true)}
        onRecordingEnd={() => setIsRecording(false)}
      />

      <TouchableOpacity
        onPress={onRecord}
        style={
          isRecording ? styles.buttonStop : styles.buttonRecord
        }></TouchableOpacity>
    </View>
  );
};

export default CameraScreen;
