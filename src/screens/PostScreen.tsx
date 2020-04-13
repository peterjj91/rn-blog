import React from 'react';
import { View, StyleSheet } from 'react-native';

export const PostScreen = () => {
  return <View style={styles.center}>Post</View>;
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
