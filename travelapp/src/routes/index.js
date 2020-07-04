import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import List from '../screens/List';
import Article from '../screens/Article';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="List" component={List} />
        <Stack.Screen
          name="Article"
          component={Article}

        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
