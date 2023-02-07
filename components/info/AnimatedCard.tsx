import LottieView from 'lottie-react-native';
import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import styles from '../../style/InfoStyles';
import {
  useFonts,
  MedievalSharp_400Regular,
} from '@expo-google-fonts/medievalsharp';
import { Almendra_400Regular } from '@expo-google-fonts/almendra';

interface Props {
  source: any,
  text: string,
  onPress: any
}

const CustomCard: React.FC<Props> = ({source, text, onPress}) => {

  let [fontsLoaded] = useFonts({
    MedievalSharp_400Regular,
    Almendra_400Regular,
  });
  
  if (!fontsLoaded) {
    return null;
  }

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.animatedImage}>
        <LottieView
          source={source}
          autoPlay={true}
          loop={false}
          duration={2000}
        />
      </View>
      <View
        style={{ height: 30, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={[styles.cardText, {fontFamily: 'MedievalSharp_400Regular'}]}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomCard;
