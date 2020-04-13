import React from 'react';
import { View, StyleSheet } from 'react-native';

export const AboutScreen = () => {
  return <View style={styles.center}>About</View>;
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
