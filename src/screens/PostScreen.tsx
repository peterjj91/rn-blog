import React, { useLayoutEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  ScrollView,
  Alert,
} from 'react-native';
import { DATA } from '../data';
import { THEME } from '../theme';
import { INavigation, IPostItem } from '../interfaces';

interface IPostScreen extends INavigation {}

export const PostScreen: React.FC<IPostScreen> = ({ navigation, route }) => {
  const { postId } = route.params;
  const post = DATA.find((p) => p.id === postId) as IPostItem;

  const removeHandler = () => {
    Alert.alert(
      'Удаление поста',
      'Вы точно хотите удалить пост?',
      [
        {
          text: 'Отменить',
          style: 'cancel',
        },
        { text: 'Удалить', style: 'destructive', onPress: () => {} },
      ],
      { cancelable: false }
    );
  };

  useLayoutEffect(() => {
    const { date } = route.params;

    navigation.setOptions({
      title: 'Post from' + new Date(date).toLocaleDateString(),
    });
  }, [navigation]);

  return (
    <ScrollView>
      <Image source={{ uri: post.img }} style={styles.image} />
      <View style={styles.textWrap}>
        <Text style={styles.title}>{post.text}</Text>
      </View>
      <Button
        title='Удалить'
        color={THEME.DANGER_COLOR}
        onPress={removeHandler}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  textWrap: {
    padding: 10,
  },
  title: {
    fontFamily: 'open-regular',
  },
});
