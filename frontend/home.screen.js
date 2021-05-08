import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const HomeScreen = ({ navigation, route }) => {
    return <Text>This is {route.params.name}'s profile</Text>;
  };

  const homeProperties = {};

  export default { HomeScreen, homeProperties };
