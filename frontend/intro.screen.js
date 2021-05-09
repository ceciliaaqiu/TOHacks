import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableWithoutFeedback } from 'react-native';
import * as Font from 'expo-font';


const littleWord = 'little';
const stepsWord = 'steps';

class IntroScreen extends React.Component {
    state = {
      fontsLoaded: false,
    };

    async loadFonts() {
      await Font.loadAsync({
        // Any string can be used as the fontFamily name. Here we use an object to provide more control
        'Good_Feeling_Sans': {
          uri: require('./assets/fonts/Good_Feeling_Sans.ttf'),
          display: Font.FontDisplay.FALLBACK,
        },
      });
      this.setState({ fontsLoaded: true });
    }

    componentDidMount() {
      this.loadFonts();
    }

    render() {
      const { navigation } = this.props;
      if(this.state.fontsLoaded){
        const styles = StyleSheet.create({
          container: {
            flex: 1,
            backgroundColor: '#ebebeb',
            textAlign: "center",
            // 
            justifyContent: 'center'
          },
          little: {
			top: 2,
            flexDirection: 'row',
            color: '#2c4829',
            fontSize: 30,
            fontFamily: "Good_Feeling_Sans"
            //textDecorationLine: 'underline'
          },
          steps: {
            color: '#2c4829',
            fontSize: 36,
            fontFamily: "Good_Feeling_Sans"            
          },
          phrase: {
			top: 275,
            color: '#816e5d',
            fontSize: 20,
            textAlign: "center",
			width: 275
          },
		  name: {
			flexDirection: 'row',
			top: 225
		  },
		  content: {
			top: -100,
			alignItems: 'center',
		  },
		  button: {
			  top: 300,
			  backgroundColor: '#134484',
			  width: 150,
			  alignItems: 'center',
			  borderWidth: 1,
			  borderRadius: 20,
			  height: 40,
			  justifyContent: 'center'
		  }
        });
      return (
        <View style={styles.container}> 
		<View style={styles.content}>
          <View style={styles.name}>
            <Text style={styles.little}>
              {littleWord}
            </Text>
            <Text style={styles.steps}>{stepsWord}</Text>
          </View>
          <Image
            style={{ width: 200, height: 200 }}
            source={{uri: "https://reactnative.dev/docs/assets/p_cat1.png"}}
          />
          <Text style={styles.phrase}>We have to wake up to the fierce urgency of the now</Text>
		  <View style={styles.button}>
			
			<TouchableWithoutFeedback
			  style={styles.button}
			  onPress={() => navigation.navigate('Home')}>
				<Text style={{color: 'white', fontSize: 20, width:150, textAlign:'center'}}>Start</Text>
			</TouchableWithoutFeedback>
		  </View>
        </View>
		</View>
		
        );
      } else {
        return null;
      }
  };
}

  const introProperties = { 

    //title: '',
    /*cardStyle: {
        backgroundColor: '#cabdac'
    },*/
    /*headerStyle: {
      backgroundColor: '#cabdac'
    }*/
    //headerTintColor: '#364702',
    /*headerTitleStyle: {
      fontFamily: "sans-serif-light",
      fontWeight: 'bold',
      alignSelf: 'center',
      fontSize: 32
    }*/
  };

  export default { IntroScreen, introProperties };
