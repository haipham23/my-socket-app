import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  separator: {
    marginVertical: 5,
    height: 1,
    width: '100%',
  },
  counter: {
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 120,
    width: '80%',
    flexDirection: 'row',
    padding: 10,
  },
  buttonWrapper: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default styles;
