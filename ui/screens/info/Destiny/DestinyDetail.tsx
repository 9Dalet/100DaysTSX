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
import styles from '../../../../style/InfoStyles';

const DestinyHome = ({ navigation, route }: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <ScrollView style={{ marginBottom: 62 }}>
      </ScrollView>
    </SafeAreaView>
  );
};


export default DestinyHome;
