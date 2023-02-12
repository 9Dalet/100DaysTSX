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
  FlatList,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import CustomBackHeader from '../../../components/info/CustomBackHeader';
import Animated, { ZoomInEasyDown, SlideInDown, FadeInDown } from 'react-native-reanimated';
import { FlatGrid } from 'react-native-super-grid';

import Characters from '../../../data/Characters';
import BlackCard from '../../../components/info/BlackCard';
import styles from '../../../style/InfoStyles';
import CustomHeader from '../../../components/rules/CustomHeader';

const CharacterHome = ({ navigation, route }: any) => {
  const data = Characters;

  const renderItem = ({ item }: any) => (
    <BlackCard
      image={item.data.image}
      name={item.data.name}
      onPress={() => {
        navigation.navigate('Detail', {
          image: item.data.image,
          name: item.data.name,
          punchline: item.data.punchline,
          lore: item.data.lore
        });
      }}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light"/>
      <ImageBackground source={require('../../../assets/black.jpg')}
        style={StyleSheet.absoluteFillObject}
        blurRadius={20}>
      <CustomBackHeader title="Personaggi" onPress={() => { navigation.goBack() }} />
      <Animated.View style={styles.animatedView} entering={FadeInDown.duration(500)}>
      <FlatGrid
            itemDimension={120}
            renderItem={renderItem}
            spacing={10}
            data={data}
            contentContainerStyle={{justifyContent: 'space-between', alignItems: 'center'}}
          />
      </Animated.View>
      </ImageBackground>
    </SafeAreaView>
  );
};


export default CharacterHome;
