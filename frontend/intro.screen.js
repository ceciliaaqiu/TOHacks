import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const IntroScreen = ({ navigation }) => {
    return (
      <Button
        title="Go to homescreen"
        onPress={() =>
          navigation.navigate('Home', { name: 'Home' })
        }
      />
    );
  };

  const introProperties = { 
    title: 'Welcome',
    /*headerStyle: {
      backgroundColor: '#cabdac'
    }, */
    
    headerTintColor: '#364702',
    headerTitleStyle: {
      fontFamily: "sans-serif-light",
      fontWeight: 'bold',
      alignSelf: 'center'
    }
  };


  export default { IntroScreen, introProperties };