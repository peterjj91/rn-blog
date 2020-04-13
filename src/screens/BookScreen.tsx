import React from 'react';
import { View, StyleSheet } from 'react-native';

export const BookScreen = () => {
  return <View style={styles.center}>Book</View>;
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
