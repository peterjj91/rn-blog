import React, { useState } from 'react';
import { AppLoading } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { bootstrap } from './src/bootstrap';
import { MainScreen } from './src/screens/MainScreen';
import { AboutScreen } from './src/screens/AboutScreen';

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
        screenOptions={{ gestureEnabled: false }}
      >
        <Stack.Screen name='Home' component={MainScreen} />
        <Stack.Screen name='About' component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
