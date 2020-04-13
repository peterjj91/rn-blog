import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { AppLoading } from 'expo';
import { bootstrap } from './src/bootstrap';

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

  return (
    <View>
      <Text>Open up App.tsx to start working on your app!</Text>
    </View>
  );
}
