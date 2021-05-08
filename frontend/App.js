import 'react-native-gesture-handler';
import { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Intro from './intro.screen';
import Home from './home.screen';

const App = () => {
  return (
  <NavigationContainer>
    <Stack.Navigator>
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
    </Stack.Navigator>
  </NavigationContainer>);
};



const Stack = createStackNavigator();



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cabdac',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



export default App;
