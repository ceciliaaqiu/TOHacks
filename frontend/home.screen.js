import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Button,
  Dimensions 
} from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from 'react-native-chart-kit';

const data = {
  labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43, 88],
      strokeWidth: 1.5, // optional
    },
  ],
};

const HomeScreen = ({ navigation }) => {
    return (
      <View>
        <Text>
          Carbon Emissions Saved
        </Text>
        <LineChart
          data={data}
          width={Dimensions.get('window').width} // from react-native
          height={250}
          yAxisLabel={'$'}
          chartConfig={{
            backgroundColor: '#abb97c',
            backgroundGradientFrom: '#b0b97c',
            backgroundGradientTo: '#9db97c',
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16
            }
          }}
          bezier
          style={{
            marginVertical: 30,
            borderRadius: 20
          }}
        />
      </View>
    );
  };


  const homeProperties = {
    title: 'Home',
    headerTintColor: 'black',
    headerTitleStyle: {
      fontFamily: "sans-serif-light",
      fontWeight: 'bold',
      alignSelf: 'flex-start'
    }
  }

  export default { HomeScreen, homeProperties };
