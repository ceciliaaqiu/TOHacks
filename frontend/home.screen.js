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
    "The worst impacts of climate change could be irreversible by 2030", 
	"The 20 warmest years on record have been in the past 22 years",
	"More than 1 million species are at risk of extinction by climate change",
	"Climate change is already happening, and it is detrimental to human life, too",
	"Many leaders still aren not taking it seriously",
	"The concentration of carbon dioxide (CO2) in our atmosphere, as of May 2020, is the highest it has been in human history.",
	"Most of the increase in global temperatures since 1950 has been caused by human activity.",
	"The average temperature of the Earth is determined by the greenhouse effect",
	"The United States is the second largest contributor to carbon dioxide (CO2) in our atmosphere",
	"As global temperatures increase, our societies will find it harder to adapt to the changes this brings, and some species are more likely to go extinct"
]

const def_icon = require('./assets/house_removebg.png')
const def_log_icon = require('./assets/paper.png')

const tabs = [
    {
        icon: def_icon,
        title: 'Home'
    },
    {
        icon: def_log_icon,
        title: 'Tasks'
    }
]


const data = {
  labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  datasets: [
    {
      data: [2, 5, 8, 12, 15, 16, 20],
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
            <View>
              <Text style={styles.text}>CO2 Emissions Prevented</Text>
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
                decimalPlaces: 0,
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
                marginBottom: 50,
                marginRight: 0.15 * (Dimensions.get('window').width - 0.1 * Dimensions.get('window').width),
                alignItems: 'center',
              }}
            />
            </View>
            <View style={styles.centering}>
              <View style={styles.completed_box}> 
                <Text style={styles.tasks}>Daily Reminders</Text>
              </View>
              
            </View>
          </ScrollView>
          <View>
            <Text style={styles.facts}>{getNewFact()}</Text>
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
    headerTintColor: '#261900',
    headerTitleStyle: {
      fontFamily: "sans-serif-light",
      fontWeight: 'bold',
      alignSelf: 'flex-start'
    },
    backgroundColor: '#ebebeb',
    justifyContent: 'center'
  }
  
  const styles = StyleSheet.create({
      centering: {
        alignItems: 'center'
      },
      text: {
        top: 100,
        color: '#2e1c00',
        fontSize: 24,
        fontFamily: "Good_Feeling_Sans",
        //textDecorationLine: 'underline',
        textAlign: 'center'
      },
      tasks: {
        top: 10,
        color: '#2e1c00',
        fontSize: 18,
        fontFamily: "Good_Feeling_Sans",
        //textDecorationLine: 'underline',
        textAlign: 'center'
      },
      content: {
        top: -50,
        textAlign: 'center',
        justifyContent: 'center'
      },
      facts: {
        top: -5,
		color: '#2e1c00',
		fontSize: 12,
		fontFamily: "Good_Feeling_Sans",
		//textDecorationLine: 'underline',
		//width: 0.85 * (Dimensions.get('window').width - 0.1 * Dimensions.get('window').width),
		textAlign: 'center', 
		justifyContent: 'center',
		padding: 15
      },
      completed_box: {
        borderWidth: 2,
        height: Dimensions.get('window').height - 470,
        width: 0.85 * (Dimensions.get('window').width - 0.1 * Dimensions.get('window').width),
        borderRadius: 20,
        textAlign: 'center'
      }
  });

  export default { HomeScreen, homeProperties };
