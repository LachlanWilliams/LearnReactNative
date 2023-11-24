// import React from 'react';
// import { SafeAreaView, Image, View } from 'react-native';
// import styles from '../../styles/styles';

// const NavBar = () => {
//   return (
//     <SafeAreaView style={styles.navBar}>
//       {/* Your navigation bar content goes here */}
//       <View style={styles.navBarContent}>
//         {/* Displaying the heart icon image */}
//         <Image source={require('../../assets/heartIcon.png')} style={styles.icon} />
//         <Image source={require('../../assets/chatIcon.png')} style={styles.icon} />
//         <Image source={require('../../assets/premiumIcon.png')} style={styles.icon} />
//         <Image source={require('../../assets/profileIcon.png')} style={styles.icon} />
//       </View>
//     </SafeAreaView>
//   );
// };

// export default NavBar;

// NavBar.js
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

  return (
    <View style={styles.navBar}>
      <View style={styles.navBarContent}>
        <TouchableOpacity onPress={goToHome}>
          <Image source={require('../../assets/heartIcon.png')} style={styles.icon} />
        </TouchableOpacity>
        <Image source={require('../../assets/chatIcon.png')} style={styles.icon} />
        <Image source={require('../../assets/premiumIcon.png')} style={styles.icon} />
        <TouchableOpacity onPress={goToProfile}>
          <Image source={require('../../assets/profileIcon.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NavBar;
