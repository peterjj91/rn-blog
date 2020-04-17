import React, { useLayoutEffect } from 'react';
import { StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { INavigation, IPostItem } from '../interfaces';
import { DATA } from '../data';
import { AppHeaderIcon } from '../components/AppHeaderIcon';
import { PostList } from '../components/PostList';

export const MainScreen: React.FC<INavigation> = ({ navigation }) => {
  const openPostHandler = (post: IPostItem) => {
    navigation.navigate('Post', {
      postId: post.id,
      date: post.date,
      booked: post.booked,
    });
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
          <Item
            title='Toggle Drawer'
            iconName='ios-menu'
            onPress={() => console.log('Tale menu')}
          />
        </HeaderButtons>
      ),
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
          <Item
            title='Tale photo'
            iconName='ios-camera'
            onPress={() => console.log('Tale photo')}
          />
        </HeaderButtons>
      ),
    });
  }, []);

  return <PostList data={DATA} onOpen={openPostHandler} />;
};

const styles = StyleSheet.create({});
