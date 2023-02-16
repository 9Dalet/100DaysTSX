import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';

//local files
import BottomNavigation from './BottomNavigation';

const AppNavigation = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#191919' }}>
      <NavigationContainer>
        <StatusBar style={'light'} />
        <BottomNavigation />
      </NavigationContainer>
    </SafeAreaView>
  )
}

export default AppNavigation;