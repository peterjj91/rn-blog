import React from 'react';
import { View, StyleSheet, Button, Text, FlatList } from 'react-native';
import { INavigation, IPostItem } from '../interfaces';
import { DATA } from '../data';
import { Post } from '../components/Post';

export const MainScreen: React.FC<INavigation> = ({ navigation }) => {
  const openPostHandler = (post: IPostItem) => {
    navigation.navigate('Post', { postId: post.id, date: post.date });
  };

  return (
    <View style={styles.center}>
      <Text>Main</Text>

      <FlatList
        data={DATA}
        keyExtractor={(post) => post.id.toString()}
        renderItem={({ item }) => <Post post={item} onOpen={openPostHandler} />}
        style={styles.list}
      />

      <Button
        title='Go to About'
        onPress={() => navigation.navigate('About')}
      />

      <Button title='Go to Post' onPress={() => navigation.navigate('Post')} />
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
