import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  // Add more styles as needed for different components or sections
  navBar: {
    height: 110, //this is about the size
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    width: '100%', // or use flex: 1
    backgroundColor: 'lightgrey',
    position: 'absolute',
    bottom: 0,
  },
  safeArea: {
    backgroundColor: 'white',
    height: '100%',
    width: '100%', // or use flex: 1
  },
  purple: {
    backgroundColor: 'purple'
  }
});

export default styles;