import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableWithoutFeedback } from 'react-native';
import * as Font from 'expo-font';


const logo = require('./assets/final3_removebg.png');

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
            color: '#2e1c00',
            fontSize: 36,
            fontFamily: "Good_Feeling_Sans"            
          },
          phrase: {
                top: 275,
            color: '#816e5d',
            fontSize: 19,
            fontFamily: "Good_Feeling_Sans",
            textAlign: "center",
                  width: 275
          },
          quote: {
            top: 285,
            color: '#816e5d',
            fontSize: 15,
            fontFamily: "Good_Feeling_Sans",
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
            top: 320,
            backgroundColor: '#165915',
            width: 150,
            alignItems: 'center',
            borderWidth: 0.5,
            borderRadius: 30,
            height: 55,
            justifyContent: 'center'
          }
        });
      return (
        <View style={styles.container}> 
          <View style={styles.content}>
            <View style={styles.name}>
              <Text style={styles.little}>little</Text>
              <Text style={styles.steps}>steps</Text>
            </View>
            <Image
            style={{ width: 200, height: 200}}
            source={logo}
            />
            <Text style={styles.phrase}>"We have to wake up to the fierce urgency of the now."</Text>
            <Text style={styles.quote}>   -Jim Yong Kim, President, The World Bank</Text>
                <View style={styles.button}>
                    <TouchableWithoutFeedback
                      style={styles.button}
                      onPress={() => navigation.navigate('Home')}>
                        <Text style={{
                          color: '#f9f8f8',
                          fontSize: 22, 
                          width:150, 
                          height:55,
                          borderWidth:0,
                          textAlign:'center',
                          textAlignVertical: 'center',
                          fontFamily: "Good_Feeling_Sans" }}>Start</Text>
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
