import React, { useLayoutEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { INavigation, IPostItem } from '../interfaces';
import { DATA } from '../data';
import { Post } from '../components/Post';
import { AppHeaderIcon } from '../components/AppHeaderIcon';

export const MainScreen: React.FC<INavigation> = ({ navigation }) => {
  const openPostHandler = (post: IPostItem) => {
    navigation.navigate('Post', { postId: post.id, date: post.date });
  };

  useLayoutEffect(() => {
    navigation.setOptions({
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

  return (
    <View style={styles.center}>
      <FlatList
        data={DATA}
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
