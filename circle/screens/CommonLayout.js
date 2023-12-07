import React from 'react';
import { View, SafeAreaView } from 'react-native';
import NavBar from '../components/navBar/navBar'; // Adjust the path based on your project structure
import styles from '../styles/styles';

const CommonLayout = ({ children }) => {
  return (
    <SafeAreaView style={styles.commonLayout}>
        <NavBar />
        {children}

    </SafeAreaView>
  );
};

export default CommonLayout;
