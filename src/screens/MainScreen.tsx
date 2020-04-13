import React from 'react';
import { View, StyleSheet } from 'react-native';

export const MainScreen = () => {
  return <View style={styles.center}>Main</View>;
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
