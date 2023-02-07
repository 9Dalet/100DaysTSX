import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import styles from '../../style/InfoStyles';
import {
    useFonts,
    MedievalSharp_400Regular,
  } from '@expo-google-fonts/medievalsharp';
  import { Almendra_400Regular } from '@expo-google-fonts/almendra';

const CustomBackHeader = (props: any) => {

    let [fontsLoaded] = useFonts({
        MedievalSharp_400Regular,
        Almendra_400Regular,
      });
      
      if (!fontsLoaded) {
        return null;
      }

    return (
        <View
            style={styles.header}>
            <TouchableOpacity
                onPress={props.onPress}
                style={styles.headerBackButton}>
                <Ionicons name="ios-chevron-back" size={40} color="#e3dac9" />
            </TouchableOpacity>
            <View
                style={styles.headerTextView}>
                <Text
                    style={[styles.headerText, {fontFamily: 'MedievalSharp_400Regular'}]}>
                    {props.title}
                </Text>
            </View>
        </View>
    )
}

export default CustomBackHeader;