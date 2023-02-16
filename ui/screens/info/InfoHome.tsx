import React from 'react';
import {
  ScrollView,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

//local files
import styles from '../../style/InfoStyles';
import AnimatedCard from '../../components/info/AnimatedCard';
//datas
import infoList from '../../data/InfoList';

const InfoHomePage = ({ navigation }: any) => {
  const data = infoList;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style={'light'} />
      <ImageBackground
        source={require('../../assets/owl.jpg')}
        blurRadius={10}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <AnimatedCard
            source={require('../../assets/33522-bookgirl.json')}
            text={data[0].name}
            onPress={() => {
              navigation.navigate('Trama');
            }}
          />
          <AnimatedCard
            source={require('../../assets//22807-people-morph-flow.json')}
            text={data[1].name}
            onPress={() => {
              navigation.navigate('Giocatori');
            }}
          />
          <AnimatedCard
            source={require('../../assets/80482-monster-4.json')}
            text={data[2].name}
            onPress={() => {
              navigation.navigate('Shinigami');
            }}
          />
          <AnimatedCard
            source={require('../../assets//4151-jack-of-diamond-animation.json')}
            text={data[3].name}
            onPress={() => {
              navigation.navigate('Destino');
            }}
          />
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default InfoHomePage;
