import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Button 
} from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from 'react-native-chart-kit'

const HomeScreen = ({ navigation, route }) => {
    return <Text>This is {route.params.name}'s profile</Text>;
  };


  const homeProperties = {
  }

  export default { HomeScreen, homeProperties };
