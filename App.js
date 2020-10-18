import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from './src/screens/SearchScreen';
import ResultsShowSceen from './src/screens/ResultsShowSceen';

const ReactNative = require('react-native');
try {
  ReactNative.I18nManager.allowRTL(false);
} catch (e) {
  console.log(e);
}

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Restaurant Page" component={ResultsShowSceen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;