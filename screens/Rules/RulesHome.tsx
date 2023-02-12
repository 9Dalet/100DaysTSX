import React from 'react';
import {
  SafeAreaView,
  View,
  ScrollView,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Animated, { FadeInUp } from 'react-native-reanimated';

//local files
import CustomHeader from '../../components/rules/CustomHeader';
import IntroView from '../../components/rules/IntroView';
import Divider from '../../components/rules/Divider';
import SmallCard from '../../components/rules/SmallCard';
import LargeCard from '../../components/rules/LargeCard';
import CaselleCard from '../../components/rules/CaselleCard';
import styles from '../../style/RulesStyles';
//data
import rules from '../../data/Rules';
import Caselle from '../../data/Caselle';

const RulesHome = ({ navigation }: any) => {
  const data = rules;
  const caselle = Caselle;
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <Animated.View entering={FadeInUp.duration(950)}>
        <CustomHeader title="Regole" />
      </Animated.View>
      <ScrollView style={styles.scroll} bounces={false}>
        <View style={styles.generalView}>
          <View>
            <IntroView
              text1={data[0].text1}
              text2={data[0].text2}
              source={data[0].image}
            />
            <Divider />
          </View>
          <View>
            <View
              style={styles.row}>
              <SmallCard name={data[1].name} text={data[1].text} />
              <View style={{width: '10%', height: '100%'}} />
              <SmallCard name={data[2].name} text={data[2].text} />
            </View>
            <View style={styles.center}>
              <SmallCard name={data[3].name} text={data[3].text} />
            </View>
          </View>
          <Divider />
          <LargeCard name={data[4].name} text={data[4].text} />
          <Divider />
          <LargeCard name={data[5].name} text={data[5].text} />
          <Divider />
          <CaselleCard
            name={data[6].name}
            image1={caselle[0].image}
            text1={data[6].text1}
            onPress1={() => { navigation.navigate('Details', { text: caselle[0].text, image: caselle[0].image }) }}
            image2={caselle[1].image}
            text2={data[6].text2}
            onPress2={() => { navigation.navigate('Details', { text: caselle[1].text, image: caselle[1].image }) }}
            image3={caselle[2].image}
            text3={data[6].text3}
            onPress3={() => { navigation.navigate('Details', { text: caselle[2].text, image: caselle[2].image }) }}
          />
          <Divider />
          <LargeCard name={data[7].name} text={data[7].text} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};



export default RulesHome;
