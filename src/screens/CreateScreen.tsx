import React from 'react';
import { View, StyleSheet } from 'react-native';

export const CreateScreen = () => {
  return <View style={styles.center}>Create</View>;
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
