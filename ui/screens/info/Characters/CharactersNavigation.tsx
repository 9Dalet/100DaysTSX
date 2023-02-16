import React from 'react';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import 'react-native-gesture-handler';

//local files
import CharacterHome from './CharactersHome';
import CharacterDetail from './CharactersDetail';
import PictureDetail from '../PictureDetail';

const Stack = createStackNavigator();
const CharacterNavigation = ({navigation}: any) => {
  return (
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          //gestureDirection: 'vertical',
          ...TransitionPresets.SlideFromRightIOS,
        }}>
        <Stack.Screen name="Home" component={CharacterHome} 
        />
        <Stack.Screen name="Detail" component={CharacterDetail} 
        />
        <Stack.Screen name="Picture" component={PictureDetail}
        />
      </Stack.Navigator>
  );
};
export default CharacterNavigation;