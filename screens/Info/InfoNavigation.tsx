import React from 'react';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import 'react-native-gesture-handler';

//local files
import InfoHome from './InfoHome';
import LoreHome from '../../../screens/Info/Lore/LoreHome';
import CharactersNavigation from './Characters/CharactersNavigation';
import ShinigamiNavigation from './Shinigami/ShinigamiNavigation';
import DestinyNavigation from './Destiny/DestinyNavigation';

const Stack = createStackNavigator();
const InfoNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        //gestureDirection: 'vertical',
        ...TransitionPresets.SlideFromRightIOS,
      }}>
      <Stack.Screen
        name="Home"
        component={InfoHome}
      />
      <Stack.Screen name="Trama" component={LoreHome}
      />
      <Stack.Screen name="Giocatori" component={CharactersNavigation}
      />
      <Stack.Screen name="Shinigami" component={ShinigamiNavigation}
      />
      <Stack.Screen name="Destino" component={DestinyNavigation}
      />
    </Stack.Navigator>
  );
};
export default InfoNavigation;