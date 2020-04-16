import React, { useState } from 'react';
import { AppLoading } from 'expo';
import { bootstrap } from './src/bootstrap';
import { AppNavigation } from './src/navigation/AppNavigation';

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

  return <AppNavigation />;
}
