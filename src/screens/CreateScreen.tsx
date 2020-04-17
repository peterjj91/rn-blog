import React, { useLayoutEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { INavigation } from '../interfaces';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { AppHeaderIcon } from '../components/AppHeaderIcon';

export const CreateScreen: React.FC<INavigation> = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
          <Item
            title='Toggle Drawer'
            iconName='ios-menu'
            onPress={() => navigation.openDrawer()}
          />
        </HeaderButtons>
      ),
    });
  }, []);

  return (
    <View style={styles.center}>
      <Text>Create</Text>

      <Button title='Go to Home' onPress={() => navigation.navigate('Home')} />
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
