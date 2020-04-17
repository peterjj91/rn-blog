import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Post } from './Post';
import { IPostItem } from '../interfaces';

interface IPostList {
  data: IPostItem[];
  onOpen: Function;
}

export const PostList: React.FC<IPostList> = ({ data, onOpen }) => {
  return (
    <View style={styles.center}>
      <FlatList
        data={data}
        keyExtractor={(post) => post.id.toString()}
        renderItem={({ item }) => <Post post={item} onOpen={onOpen} />}
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
