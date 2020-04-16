import React, { useState } from 'react';
import { Platform } from 'react-native';
import { AppLoading } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { bootstrap } from './src/bootstrap';
import { MainScreen } from './src/screens/MainScreen';
import { THEME } from './src/theme';
import { PostScreen } from './src/screens/PostScreen';
import { BookScreen } from './src/screens/BookScreen';
import { IconWithBadge } from './src/components/AppIconWithBadge';

export default function App() {
  const [isReady, setIsReady] = useState<boolean>(false);

  if (!isReady) {
    return (
      <AppLoading
        startAsync={bootstrap}
        onError={(error) => console.log(error)}
        onFinish={() => setIsReady(true)}
      />
    );
  }

  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();
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
            headerTitle: 'My Home',
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
          name='Home'
          component={MainScreen}
          options={{
            headerTitle: 'My Home',
          }}
        />
        <Stack.Screen
          name='Booked'
          component={BookScreen}
          options={({ route }) => ({
            headerTitle: 'My Booked',
          })}
        />
      </Stack.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
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
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name='Home' component={Home} />
        <Tab.Screen name='Booked' component={Booked} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
