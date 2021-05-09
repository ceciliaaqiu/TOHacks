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

const quotes = [
	"im bout to fall asleep", "it may be the end"
]

const def_icon = require('./home.png')

const tabs = [
	{
		icon: def_icon,
		title: 'Home'
	},
	{
		icon: def_icon,
		title: 'Intro'
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

function getTitle(index) {
	return tabs[index]['title'];
};

function getNewFact() {
	return quotes[Math.floor(Math.random() * quotes.length)];
};

const HomeScreen = ({ navigation }) => {
    return (
      <View style={homeProperties}>
	  <ScrollView>
		  <View style={styles.content}>
			<View style={styles.text}>
				<Text>CO2 Emissions Prevented This Week</Text>
			</View>
			
			<BarChart
			  data={data}
			  width={Dimensions.get('window').width - 0.1 * Dimensions.get('window').width} // from react-native
			  height={250}
			  yAxisLabel={''}
			  withInnerLines={false}
			  showValuesOnTopOfBars={true}
			  withHorizontalLabels={false}
			  showBarTops={false}
			  chartConfig={{
				backgroundColor: '#ebebeb',
				backgroundGradientFrom: '#ebebeb',
				backgroundGradientTo: '#ebebeb',
				fillShadowGradientOpacity: 0.3,
				fillShadowGradient: '#000000',
				decimalPlaces: 0, // optional, defaults to 2dp
				color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
				barPercentage: 0.65,
				style: {
				  borderRadius: 16
				},
			  }}
			  style={{
				 top: 100,
				marginVertical: 30,
				borderRadius: 20,
				marginRight: 0.15 * (Dimensions.get('window').width - 0.1 * Dimensions.get('window').width),
				alignItems: 'center',
			  }}
			/>
			
			
			</View>
	  </ScrollView>
	  <View style={styles.facts}>
				<Text>{getNewFact()}</Text>
			</View>
	  <View style={styles.tab}>
		<TabBar onTabChange={(index) => navigation.navigate(getTitle(index))} tabs={tabs} />
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
	  },
	  facts: {
		  top: -20,
		flexDirection: 'row',
		justifyContent: 'center'
	  }
  });

  export default { HomeScreen, homeProperties };
