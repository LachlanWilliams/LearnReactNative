import React from 'react';
import { View, SafeAreaView } from 'react-native';
import NavBar from '../components/navBar/navBar'; // Adjust the path based on your project structure

const CommonLayout = ({ children }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
        <NavBar />
        {children}

    </SafeAreaView>
  );
};

export default CommonLayout;
