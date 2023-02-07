import React from 'react';
import {
  View,
  ImageBackground,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import styles from '../../style/RulesStyles';
import {
  useFonts,
  MedievalSharp_400Regular,
} from '@expo-google-fonts/medievalsharp';
import { Almendra_400Regular } from '@expo-google-fonts/almendra';

interface Props {
  name: string | undefined,
  onPress1: any,
  onPress2: any,
  onPress3: any,
  image1: any,
  image2: any,
  image3: any,
  text1: string | undefined,
  text2: string | undefined,
  text3: string | undefined,
}

const CaselleCard: React.FC<Props> = ({
  name,
  onPress1,
  onPress2,
  onPress3,
  image1,
  image2,
  image3,
  text1,
  text2,
  text3
}) => {
  let [fontsLoaded] = useFonts({
    MedievalSharp_400Regular,
    Almendra_400Regular,
  });
  
  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.CaselleCard}>
      <View style={styles.titleText}>
        <Text
          style={[styles.caselleText, {fontFamily: 'MedievalSharp_400Regular'}]}>
          {name}
        </Text>
      </View>
      <View style={styles.rowContainer}>
        <TouchableOpacity style={styles.innerCard} onPress={onPress1}>
          <View
            style={styles.innerCardImageView}>
            <ImageBackground
              source={image1}
              style={styles.CaselleCardImage}>
              <View style={styles.textView}>
                <Text style={[styles.textcard, {fontFamily: 'Almendra_400Regular'}]}>{text1}</Text>
              </View>
            </ImageBackground>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.innerCard} onPress={onPress2}>
          <View
            style={styles.innerCardImageView}>
            <ImageBackground
              source={image2}
              style={styles.CaselleCardImage}>
              <View style={styles.textView}>
                <Text style={[styles.textcard, {fontFamily: 'Almendra_400Regular'}]}>{text2}</Text>
              </View>
            </ImageBackground>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.innerCard} onPress={onPress3}>
          <View
            style={styles.innerCardImageView}>
            <ImageBackground source={image3} style={styles.CaselleCardImage}>
              <View style={styles.textView}>
                <Text style={[styles.textcard, {fontFamily: 'Almendra_400Regular'}]}>{text3}</Text>
              </View>
            </ImageBackground>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};


export default CaselleCard;
