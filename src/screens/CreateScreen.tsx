import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export const CreateScreen = () => {
  return (
    <View style={styles.center}>
      <Text>Create</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
