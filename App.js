import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/Home';
import ColorCode from './screens/ColorCode';
import ThemeScreen from './screens/Theme';
import BackStory from './screens/BackStory';
import Others from './screens/Variants';
import Credits from './screens/Credits';

const Stack = createStackNavigator();

function A () {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ColorCode" component={ColorCode} />
        <Stack.Screen name="Theme" component={ThemeScreen} />
        <Stack.Screen name="Story" component={BackStory} />
        <Stack.Screen name="OtherVariants" component={Others} />
        <Stack.Screen name="Credits" component={Credits} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default A;