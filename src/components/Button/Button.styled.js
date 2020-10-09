import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  buttonContainer: {
    elevation: 8,
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginHorizontal: 10,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
  buttonEnabled: {
    backgroundColor: '#009688',
  },
  buttonDisabled: {
    backgroundColor: '#808080',
  },
});

export default styles;
