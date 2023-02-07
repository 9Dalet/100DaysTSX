import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome, Entypo, Foundation } from '@expo/vector-icons';

//local files
import Timer3 from '../Timer/Timer3';
import InfoNavigation from '../Info/InfoNavigation';
import RulesNavigation from '../Rules/RulesNavigation';


const Tab = createBottomTabNavigator();

const BottomStack = () => {
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
            <Entypo name="stopwatch" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Rules"
        component={RulesNavigation}
        options={{
          tabBarLabel: 'Regole',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="leanpub" size={26} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Info"
        component={InfoNavigation}
        options={{
          tabBarLabel: 'Arte',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="key" size={26} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomStack;