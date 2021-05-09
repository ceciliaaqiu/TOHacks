import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
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
            backgroundColor: '#cabdac',
            textAlign: "center",
            alignItems: 'center',
            justifyContent: 'center'
          },
          little: {
            flexDirection: 'row',
            color: '#2c4829',
            fontSize: 35,
            fontFamily: "Good_Feeling_Sans"
            //textDecorationLine: 'underline'
          },
          steps: {
            color: '#2c4829',
            fontSize: 35,
            fontFamily: "Good_Feeling_Sans"
            
          },
          phrase: {
            color: '#816e5d',
            fontSize: 20,
            textAlign: "center"
          }
        });
      return (
        <View style={styles.container}> 
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.little}>
              {littleWord}
            </Text>
            <Text style={styles.steps}>{stepsWord}</Text>
          </View>
          <Image
            style={{ width: 200, height: 200 }}
            source={{uri: "https://reactnative.dev/docs/assets/p_cat1.png"}}
          />
          <Text style={styles.phrase}>Insert phrase here oh no oh no oh no oh no oh no oh no</Text>
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
