import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  input: {
    margin: 10,
    height: 100,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#ff4747',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    height: 60,
    borderRadius: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
