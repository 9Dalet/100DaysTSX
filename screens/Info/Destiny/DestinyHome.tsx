import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import CustomBackHeader from '../../../components/info/CustomBackHeader';
import styles from '../../../style/InfoStyles';

const DestinyHome = ({ navigation, route }: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require('../../../assets/black.jpg')}
        style={StyleSheet.absoluteFillObject}
        blurRadius={20}>
        <StatusBar style="light" />
        <ScrollView style={styles.scroll}>
          <CustomBackHeader title="Destino" onPress={() => { navigation.goBack() }} />
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default DestinyHome;
