import React, { useLayoutEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { INavigation, IPostItem } from '../interfaces';
import { DATA } from '../data';
import { Post } from '../components/Post';
import { AppHeaderIcon } from '../components/AppHeaderIcon';

export const BookScreen: React.FC<INavigation> = ({ navigation }) => {
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
    });
  }, []);

  return (
    <View style={styles.center}>
      <FlatList
        data={DATA.filter((p) => p.booked)}
        keyExtractor={(post) => post.id.toString()}
        renderItem={({ item }) => <Post post={item} onOpen={openPostHandler} />}
        style={styles.list}
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
  list: {
    width: '100%',
  },
});
