import 'react-native-gesture-handler';
import { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Intro from './intro.screen';
import Home from './home.screen';
import Tasks from './tasks.screen';
import { startClock } from 'react-native-reanimated';

const App = () => {
  return (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Intro"
        component={Intro.IntroScreen}
        options={Intro.introProperties}
      />
      <Stack.Screen 
        name="Home"
        component={Home.HomeScreen} 
        options={Home.homeProperties}
      />
      <Stack.Screen
        name= "Tasks"
        component={Tasks.TasksScreen}
        options={Tasks.tasksProperties}
      />
    </Stack.Navigator>
  </NavigationContainer>);
};



const Stack = createStackNavigator();



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebebeb',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



export default App;
