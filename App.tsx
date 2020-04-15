import React, { useState } from 'react';
import { Platform } from 'react-native';
import { AppLoading } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { bootstrap } from './src/bootstrap';
import { MainScreen } from './src/screens/MainScreen';
import { AboutScreen } from './src/screens/AboutScreen';
import { THEME } from './src/theme';
import { PostScreen } from './src/screens/PostScreen';

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

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{
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
        }}
      >
        <Stack.Screen
          name='Home'
          component={MainScreen}
          options={{
            headerTitle: 'My Home',
          }}
        />
        <Stack.Screen
          name='About'
          component={AboutScreen}
          options={{ headerTitle: 'My About' }}
        />
        <Stack.Screen
          name='Post'
          component={PostScreen}
          // options={{ headerTitle: 'My Post' }}
          options={({ route }) => ({ headerTitle: route.params.title })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
