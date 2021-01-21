import React, {useState, useRef} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {RNCamera} from 'react-native-camera';
import styles from './styles';

const CameraScreen = () => {
  const [isRecording, setIsRecording] = useState(false);
  const camera = useRef();

  const onRecord = async () => {
    if (isRecording) {
      camera.current.stopRecording();
      console.log('isRecording', isRecording);
    } else {
      const data = await camera.current.recordAsync();

      console.log('data', data);
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
