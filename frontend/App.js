import 'react-native-gesture-handler';
import { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const App = () => {
  return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Intro"
        component={IntroScreen}
        options={{ 
          headerTitle: 'Welcome',
            textAlign: 'center',
            alignSelf: 'center',
            headerStyle:{ 
              backgroundColor: '#cabdac'
            }
          , 
          headerTintColor: '#abb97c',
          headerTitleStyle: {
            fontFamily: "sans-serif-light",
            fontWeight: 'bold'
          }
        }}
      />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  </NavigationContainer>);
};

const Stack = createStackNavigator();

const IntroScreen = ({ navigation }) => {
  return (
    <Button
      title="Go to homescreen"
      onPress={() =>
        navigation.navigate('Profile', { name: 'Jane' })
      }
    />
  );
};
const ProfileScreen = ({ navigation, route }) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



export default App;
