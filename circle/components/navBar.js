import React from 'react';
import { View } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import styles from '../styles/styles';

const NavBar = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.navBar}>
        {/* Your navigation bar content goes here */}
      </View>
    </SafeAreaView>
  );
};

export default NavBar;
