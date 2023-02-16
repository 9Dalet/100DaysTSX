import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome, MaterialIcons, Foundation, FontAwesome5 } from '@expo/vector-icons';
import {
  useFonts,
  MedievalSharp_400Regular,
} from '@expo-google-fonts/medievalsharp';

//local files
import Timer3 from '../../ui/screens/timer/Timer3';
import InfoNavigation from '../Info/InfoNavigation';
import RulesNavigation from '../Rules/RulesNavigation';


const Tab = createBottomTabNavigator();

const BottomStack = () => {

  let [fontsLoaded] = useFonts({
    MedievalSharp_400Regular,
  });
  
  if (!fontsLoaded) {
    return null;
  }

  return (
    <Tab.Navigator
      initialRouteName="Rules"
      backBehavior='initialRoute'
      screenOptions={{
        tabBarActiveTintColor: '#9e7bb5',
        tabBarInactiveTintColor: '#e3dac9',
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#151515',
          borderTopWidth: 0,
          height: 60,
          paddingBottom: 5,
          overflow: 'hidden',
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          position: 'absolute',
        },
        tabBarLabelStyle: {
          fontSize: 15,
          fontFamily: 'MedievalSharp_400Regular',
        },
        //tabBarItemStyle: { backgroundColor: '#191919' },
      }}>
      <Tab.Screen
        name="Timer"
        component={Timer3}
        options={{
          tabBarLabel: 'Timer',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="hourglass-end" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Rules"
        component={RulesNavigation}
        options={{
          tabBarLabel: 'Regole',
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="scroll" size={24} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Info"
        component={InfoNavigation}
        options={{
          tabBarLabel: 'Arte',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="color-lens" size={30} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomStack;
