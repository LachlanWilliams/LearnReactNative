import React from 'react';
import { Text,View, SafeAreaView } from 'react-native';
import styles from '../styles/styles';

const NavBar = () => {
  return (
    <SafeAreaView style={styles.navBar}>
        {/* Your navigation bar content goes here */}
        <Text>This is NavBar</Text>
    </SafeAreaView>
  );
};

export default NavBar;