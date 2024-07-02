
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Home/Home';
import TaskScreen from '../screens/Tarefas/Task';
import { RootStackParamList } from './Types';

const Stack = createStackNavigator<RootStackParamList>();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Tarefa" component={TaskScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
