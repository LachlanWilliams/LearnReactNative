import { StyleSheet } from 'react-native';
import { colors, fonts } from './theme';

const styles = StyleSheet.create({
   navBar: {
    height: 110,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    width: '100%',
    backgroundColor: colors.white,
    position: 'absolute',
    bottom: 0,
  },
  navBarContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  safeArea: {
    backgroundColor: colors.grey,
    height: '100%',
    width: '100%',
  },
  icon: {
    height: 50,
    width: 50,
    marginHorizontal: 8, // Add margin between each icon if needed
  },
  purple: {
    backgroundColor: 'purple',
  },
  commonLayout: {
    flex:1,
    backgroundColor: colors.grey,
    fontFamily: fonts.main
  },
  text: {
    fontFamily: fonts.main
  }
});

export default styles;
