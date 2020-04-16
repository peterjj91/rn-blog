import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MainScreen } from '../screens/MainScreen';
import { THEME } from '../theme';
import { PostScreen } from '../screens/PostScreen';
import { BookScreen } from '../screens/BookScreen';
import { IconWithBadge } from '../components/AppIconWithBadge';

export const AppNavigation = () => {
  const Stack = createStackNavigator();
  const Tab =
    Platform.OS === 'android'
      ? createMaterialBottomTabNavigator()
      : createBottomTabNavigator();

  const screenOptions = {
    gestureEnabled: false,
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

  function Home() {
    return (
      <Stack.Navigator initialRouteName='Home' screenOptions={screenOptions}>
        <Stack.Screen
          name='Home'
          component={MainScreen}
          options={{
            headerTitle: 'Home',
          }}
        />
        <Stack.Screen
          name='Post'
          component={PostScreen}
          options={({ route }) => ({
            headerTitle: route.params.title,
          })}
        />
      </Stack.Navigator>
    );
  }

  function Booked() {
    return (
      <Stack.Navigator initialRouteName='Booked' screenOptions={screenOptions}>
        <Stack.Screen
          name='Booked'
          component={BookScreen}
          options={({ route }) => ({
            headerTitle: 'Favourite',
          })}
        />
        <Stack.Screen
          name='Post'
          component={PostScreen}
          options={({ route }) => ({
            headerTitle: route.params.title,
          })}
        />
      </Stack.Navigator>
    );
  }

  return (
    <NavigationContainer>
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
        <Tab.Screen name='Home' component={Home} />
        <Tab.Screen name='Booked' component={Booked} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
