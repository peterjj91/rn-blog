import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MainScreen } from '../screens/MainScreen';
import { THEME } from '../theme';
import { PostScreen } from '../screens/PostScreen';
import { BookScreen } from '../screens/BookScreen';
import { IconWithBadge } from '../components/AppIconWithBadge';
import { AboutScreen } from '../screens/AboutScreen';
import { CreateScreen } from '../screens/CreateScreen';

export const AppNavigation = () => {
  const Stack = createStackNavigator();
  const Tab =
    Platform.OS === 'android'
      ? createMaterialBottomTabNavigator()
      : createBottomTabNavigator();
  const Drawer = createDrawerNavigator();
  const screenOptions = {
    headerStyle: {
      backgroundColor:
        Platform.OS === 'android' ? THEME.MAIN_COLOR : THEME.LIGHT_COLOR,
    },
    headerTintColor:
      Platform.OS === 'android' ? THEME.LIGHT_COLOR : THEME.MAIN_COLOR,
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  function HomePages() {
    return (
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name='Home' component={MainScreen} />
        <Stack.Screen name='Book' component={BookScreen} />
        <Tab.Screen name='Post' component={PostScreen} />
      </Stack.Navigator>
    );
  }

  function BookedPages() {
    return (
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name='Booked' component={BookScreen} />
        <Stack.Screen name='Post' component={PostScreen} />
      </Stack.Navigator>
    );
  }

  function Home() {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }: { color: string; size: number }) => {
            if (route.name === 'Home') {
              return <Ionicons name={'ios-albums'} size={size} color={color} />;
            } else if (route.name === 'Booked') {
              return (
                <IconWithBadge
                  name={'ios-star'}
                  size={size}
                  color={color}
                  badgeCount={5}
                />
              );
            }
          },
        })}
        barStyle={{
          backgroundColor:
            Platform.OS === 'android' ? THEME.MAIN_COLOR : THEME.LIGHT_COLOR,
        }}
        activeColor={Platform.OS === 'android' ? 'white' : 'tomato'}
        inactiveColor={'gray'}
      >
        <Tab.Screen name='Home' component={HomePages} />
        <Tab.Screen name='Booked' component={BookedPages} />
      </Tab.Navigator>
    );
  }

  function Create() {
    return (
      <Stack.Navigator
        barStyle={{
          backgroundColor:
            Platform.OS === 'android' ? THEME.MAIN_COLOR : THEME.LIGHT_COLOR,
        }}
        activeColor={Platform.OS === 'android' ? 'white' : 'tomato'}
        inactiveColor={'gray'}
      >
        <Stack.Screen name='Create' component={CreateScreen} />
      </Stack.Navigator>
    );
  }

  function About() {
    return (
      <Stack.Navigator
        barStyle={{
          backgroundColor:
            Platform.OS === 'android' ? THEME.MAIN_COLOR : THEME.LIGHT_COLOR,
        }}
        activeColor={Platform.OS === 'android' ? 'white' : 'tomato'}
        inactiveColor={'gray'}
      >
        <Stack.Screen name='About' component={AboutScreen} />
      </Stack.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name='Posts' component={Home} />
        <Drawer.Screen name='About' component={About} />
        <Drawer.Screen name='Create' component={Create} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
