import React from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';
import { INavigation } from '../interfaces';

export const MainScreen: React.FC<INavigation> = ({ navigation }) => {
  return (
    <View style={styles.center}>
      <Text>Main</Text>

      <Button
        title='Go to About'
        onPress={() => navigation.navigate('About')}
      />
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
