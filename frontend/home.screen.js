import React from 'react';
import { ScrollView } from 'react-native';
import TabBar from 'react-native-tab-bar-footer';

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

const tabs = [
	{
		title: 'Home'
	},
	{
		title: 'Tasks'
	}
]


const data = {
  labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43, 88],
      strokeWidth: 1, // optional
    },
  ],
};


const HomeScreen = ({ navigation }) => {
    return (
	
      <View style={homeProperties}>
	  <ScrollView>
		  <View style={styles.content}>
			<View style={styles.text}>
			<Text>Carbon Emissions Prevented This Week</Text>
			</View>
			<BarChart
			  data={data}
			  width={Dimensions.get('window').width - 50} // from react-native
			  height={250}
			  yAxisLabel={''}
			  withInnerLines={false}
			  chartConfig={{
				backgroundColor: '#ebebeb',
				backgroundGradientFrom: '#ebebeb',
				backgroundGradientTo: '#ebebeb',
				decimalPlaces: 2, // optional, defaults to 2dp
				color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
				barPercentage: 1,
				style: {
				  borderRadius: 16
				},
			  }}
			  style={{
				 top: 100,
				marginVertical: 30,
				borderRadius: 20,
				alignItems: 'center',
			  }}
			/>
		  </View>
	  </ScrollView>
	  <View style={styles.tab}>
		<TabBar onTabChange={(index) => alert(index)} tabs={tabs} />
	  </View>
	  </View>
    );
  };


  const homeProperties = {
	  flex:1,
    title: 'Home',
    headerTintColor: 'black',
    headerTitleStyle: {
      fontFamily: "sans-serif-light",
      fontWeight: 'bold',
      alignSelf: 'flex-start'
    },
	backgroundColor: '#ebebeb'
  }
  
  const styles = StyleSheet.create({
	  text: {
		top: 100,
		flexDirection: 'row',
		color: '#ebebeb',
		fontSize: 36,
		fontFamily: "Good_Feeling_Sans",
		//textDecorationLine: 'underline',
		justifyContent: 'center'
	  },
	  content: {
		top: -50,
		textAlign: 'center',
		justifyContent: 'center'
	  }
  });

  export default { HomeScreen, homeProperties };
