// HomeScreen.js
import React from 'react';
import { View, Text } from 'react-native';
import CommonLayout from './CommonLayout';
import styles from '../styles/styles';

const HomeScreen = () => {
  return (
    <CommonLayout>
      <View>
        <Text style={styles.text}>This is the Home screen</Text>
      </View>
    </CommonLayout>
  );
};

export default HomeScreen;
