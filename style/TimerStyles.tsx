import React from 'react';
import { StyleSheet } from 'react-native';
import Constants from 'expo-constants'

const styles = StyleSheet.create({
    button: {
      height: 70,
      width: 140,
      backgroundColor: '#7a4989',
      borderRadius: 20,
      padding: 5,
      marginTop: 10,
      justifyContent: 'center'
    },
    buttonText: {
      color: 'white',
      fontSize: 30,
      textAlign: 'center',
      fontWeight: 'bold'
    },
    container: {
        flex: 1,
        backgroundColor: '#212121',
        paddingTop: Constants.statusBarHeight,
      },
      timerView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
  });

export default styles;