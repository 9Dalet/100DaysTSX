import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import Animated, { SlideInRight, SlideInLeft, SlideInUp, FadeIn, FadeInLeft, FadeInRight } from 'react-native-reanimated';

import styles from '../../style/RulesStyles';
import {
  useFonts,
  MedievalSharp_400Regular,
} from '@expo-google-fonts/medievalsharp';
import { Almendra_400Regular } from '@expo-google-fonts/almendra';

interface Props {
  text1: string | undefined,
  text2: string | undefined,
  source: any
}

const IntroView: React.FC<Props> = ({ text1, text2, source }) => {

  let [fontsLoaded] = useFonts({
    MedievalSharp_400Regular,
    Almendra_400Regular,
  });
  
  if (!fontsLoaded) {
    return null;
  }
  
  return (
    <View style={styles.introView}>
      <View style={styles.introTextView}>
        <Animated.Text style={[styles.introText1, {fontFamily: 'MedievalSharp_400Regular'}]} entering={FadeIn.duration(1000)}>{text1}</Animated.Text>
        <Animated.View entering={FadeInLeft.duration(1050)} style={{flexDirection: 'row', justifyContent: 'space-evenly', flex: 1, width: '100%'}}>
          <Text style={[styles.introText2, {fontFamily: 'Almendra_400Regular'}]}>{text2}</Text>
          <Animated.Image source={source} style={styles.introImage} entering={SlideInRight.duration(1050)} />
        </Animated.View>
      </View>
      
    </View>
  );
};


export default IntroView;
