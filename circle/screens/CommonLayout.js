import React from 'react';
import { View, SafeAreaView } from 'react-native';
import NavBar from './NavBar'; // Adjust the path based on your project structure

const CommonLayout = ({ children }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <NavBar />
        {children}
      </View>
    </SafeAreaView>
  );
};

export default CommonLayout;
