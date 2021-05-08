import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';


const littleWord = 'little';
const stepsWord = 'steps';

const IntroScreen = ({ navigation }) => {
    return (
      <View style={styles.container}> 
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.little}>{littleWord}</Text>
          <Text style={styles.steps}>{stepsWord}</Text>
        </View>
        <Image
          style={{ width: 200, height: 200 }}
          source={{uri: "https://reactnative.dev/docs/assets/p_cat1.png"}}
        />
        <Text style={styles.phrase}>Insert phrase here oh no oh no oh no oh no oh no oh no</Text>
      </View>

    );
  };

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
      //textDecorationLine: 'underline'
    },
    steps: {
      color: '#2c4829',
      fontWeight: 'bold',
      fontSize: 35,
      
    },
    phrase: {
      color: '#816e5d',
      fontSize: 20,
      textAlign: "center"
    }
  });


  export default { IntroScreen, introProperties };