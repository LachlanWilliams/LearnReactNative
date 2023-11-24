import React from 'react';
import { SafeAreaView, Image, View } from 'react-native';
import styles from '../../styles/styles';

const NavBar = () => {
  return (
    <SafeAreaView style={styles.navBar}>
      {/* Your navigation bar content goes here */}
      <View style={styles.navBarContent}>
        {/* Displaying the heart icon image */}
        <Image source={require('../../assets/heartIcon.png')} style={styles.icon} />
        <Image source={require('../../assets/chatIcon.png')} style={styles.icon} />
        <Image source={require('../../assets/premiumIcon.png')} style={styles.icon} />
        <Image source={require('../../assets/profileIcon.png')} style={styles.icon} />
      </View>
    </SafeAreaView>
  );
};

export default NavBar;
