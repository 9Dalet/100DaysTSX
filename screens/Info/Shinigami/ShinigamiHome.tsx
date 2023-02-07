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
import Animated, { FadeInDown } from 'react-native-reanimated';

import Shinigami from '../../../data/Shinigami';
import BlackCard from '../../../components/info/BlackCard';
import CustomBackHeader from '../../../components/info/CustomBackHeader';
import styles from '../../../style/InfoStyles';

const ShinigamiHome = ({ navigation, route }: any) => {
  const data = Shinigami;

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
      <StatusBar style="light" />
      <ImageBackground source={require('../../../assets/black.jpg')}
        style={StyleSheet.absoluteFillObject}
        blurRadius={10}>
        <CustomBackHeader title="Shinigami" onPress={() => { navigation.goBack() }} />
        <Animated.View style={styles.animatedView} entering={FadeInDown.duration(500)}>
          <FlatList
            data={data}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            contentContainerStyle={{
              alignItems: 'center',
              justifyContent: 'center',
            }}
          />
        </Animated.View>
      </ImageBackground>
    </SafeAreaView>
  );
};


export default ShinigamiHome;
