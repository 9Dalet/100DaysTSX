import React from 'react';
import { SafeAreaView, View, Image, Text, StyleSheet } from 'react-native';

import ModalDivider from '../../components/rules/ModalDivider';
import styles from '../../style/RulesStyles';
import {
  useFonts,
  MedievalSharp_400Regular,
} from '@expo-google-fonts/medievalsharp';
import { Almendra_400Regular } from '@expo-google-fonts/almendra';

const RulesDetail = ({ navigation, route }: any) => {
  const { text, image } = route.params;

  let [fontsLoaded] = useFonts({
    MedievalSharp_400Regular,
    Almendra_400Regular,
  });
  
  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <ModalDivider onPress={()=> navigation.goBack()}/>
      <View style={styles.centralizer}>
        <Image
          source={image}
          style={styles.image}
        />
        <View style={styles.description}>
          <Text style={[styles.descriptionText, {fontFamily: 'Almendra_400Regular'}]}>{text}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};


export default RulesDetail;
