import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  ImageBackground,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import CustomBackHeader from '../../../components/info/CustomBackHeader';

import styles from '../../../style/InfoStyles';
import {
  useFonts,
  MedievalSharp_400Regular,
} from '@expo-google-fonts/medievalsharp';
import { Almendra_400Regular } from '@expo-google-fonts/almendra';

const InfoPage = ({ navigation, route }: any) => {

  const { image, name, punchline, lore } = route.params;

  let [fontsLoaded] = useFonts({
    MedievalSharp_400Regular,
    Almendra_400Regular,
  });
  
  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <ImageBackground source={image}
        style={StyleSheet.absoluteFillObject}
        blurRadius={50}>
        <CustomBackHeader title={name} onPress={() => { navigation.goBack() }} />
        <ScrollView style={styles.scroll}>
          <View
            style={styles.pictureClicker}>
            <TouchableOpacity onPress={() => { navigation.navigate('Picture', { image: image }) }}>
              <Image
                source={image}
                style={styles.characterImage}
              />
            </TouchableOpacity>
            <View>
              <View style={styles.flexer}></View>
              <View
                style={styles.punchline}>
                <Text
                  style={[styles.punchlineText, {fontFamily: 'Almendra_400Regular'}]}>
                  {punchline}
                </Text>
              </View>
            </View>
          </View>
          <Text
            style={[styles.descriptionText, {fontFamily: 'MedievalSharp_400Regular'}]}>
            Descrizione
          </Text>
          <View
            style={styles.characterLoreView}>
            <Text style={[styles.characterLoreText, {fontFamily: 'Almendra_400Regular'}]}>
              {lore}
            </Text>
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default InfoPage;
