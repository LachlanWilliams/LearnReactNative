import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../../styles/styles'; // Adjust the path based on your project structure

const NavBar = () => {
  const navigation = useNavigation();

  const goToHome = () => {
    navigation.navigate('Home');
  };

  const goToProfile = () => {
    navigation.navigate('Profile');
  };

  const goToChat = () => {
    navigation.navigate('Chat');
  };

  const goToPremium = () => {
    navigation.navigate('Premium');
  };

  return (
    <View style={styles.navBar}>
      <View style={styles.navBarContent}>
        <TouchableOpacity onPress={goToHome}>
          <Image source={require('../../assets/heartIcon.png')} style={styles.icon} />
        </TouchableOpacity>

        <TouchableOpacity onPress={goToChat}>
          <Image source={require('../../assets/chatIcon.png')} style={styles.icon} />
        </TouchableOpacity>

        <TouchableOpacity onPress={goToPremium}>
          <Image source={require('../../assets/premiumIcon.png')} style={styles.icon} />
        </TouchableOpacity>

        <TouchableOpacity onPress={goToProfile}>
          <Image source={require('../../assets/profileIcon.png')} style={styles.icon} />
        </TouchableOpacity>

      </View>
    </View>
  );
};

export default NavBar;
