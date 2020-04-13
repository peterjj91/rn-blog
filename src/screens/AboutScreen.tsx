import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { INavigation } from '../interfaces';

export const AboutScreen: React.FC<INavigation> = ({ navigation }) => {
  return (
    <View style={styles.center}>
      <Text>About</Text>

      <Button title='Go to Main' onPress={() => navigation.navigate('About')} />
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
