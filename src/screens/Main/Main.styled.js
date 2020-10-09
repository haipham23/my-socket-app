import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  counter: {
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 120,
    width: '80%',
    flexDirection: 'row',
    padding: 10,
  },
  button: {
    backgroundColor: '#feb2b2',
    padding: 6,
  },
});

export default styles;
