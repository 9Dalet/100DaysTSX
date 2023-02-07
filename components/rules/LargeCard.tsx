import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';

import styles from '../../style/RulesStyles';
import {
  useFonts,
  MedievalSharp_400Regular,
} from '@expo-google-fonts/medievalsharp';
import { Almendra_400Regular } from '@expo-google-fonts/almendra';

interface Props {
  name: string | undefined,
  text: string | undefined
}

const SmallCard: React.FC<Props> = ({ name, text }) => {

  let [fontsLoaded] = useFonts({
    MedievalSharp_400Regular,
    Almendra_400Regular,
  });
  
  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.largeCard}>
      <View style={styles.largeCardNameView}>
        <Text style={[styles.largeCardName, {fontFamily: 'MedievalSharp_400Regular'}]}>{name}</Text>
      </View>
      <View style={styles.largeCardContentView}>
        <Animated.Text style={[styles.text, {fontFamily: 'Almendra_400Regular'}]} entering={FadeInDown.duration(1600)}>{text}</Animated.Text>
      </View>
    </View>
  );
};

export default SmallCard;