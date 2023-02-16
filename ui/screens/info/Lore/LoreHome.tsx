import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Animated, { FadeInDown } from 'react-native-reanimated';
import {
  useFonts,
  MedievalSharp_400Regular,
} from '@expo-google-fonts/medievalsharp';
import { Almendra_400Regular } from '@expo-google-fonts/almendra';
//local files
import CustomBackHeader from '../../../../components/info/CustomBackHeader';
import styles from '../../../../style/InfoStyles';
//data
import LoreData from '../../../../data/LoreData';

const LoreHome = ({ navigation, route }: any) => {
  const data = LoreData;

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
      <ImageBackground
        source={require('../../../assets/black.jpg')}
        style={StyleSheet.absoluteFillObject}
        blurRadius={15}>
        <CustomBackHeader title="Trama" onPress={() => { navigation.goBack() }} />
        <ScrollView style={styles.scroll}>
          <View
            style={styles.padding}>
            <View style={styles.textContainer}>
              <Animated.Text entering={FadeInDown.duration(500)} style={[styles.loreText, { fontFamily: 'Almendra_400Regular' }]}>
                {data.lore}
              </Animated.Text>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default LoreHome;