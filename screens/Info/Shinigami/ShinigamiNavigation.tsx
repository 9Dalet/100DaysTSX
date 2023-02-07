import React from 'react';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import 'react-native-gesture-handler';

//local files
import ShinigamiHome from './ShinigamiHome';
import ShinigamiDetail from './ShinigamiDetail';
import PictureDetail from '../PictureDetail';

const Stack = createStackNavigator();
const ShinigamiNavigation = () => {
  return (
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          //gestureDirection: 'vertical',
          ...TransitionPresets.SlideFromRightIOS,
        }}>
        <Stack.Screen name="Home" component={ShinigamiHome} 
        />
        <Stack.Screen name="Detail" component={ShinigamiDetail} 
        />
        <Stack.Screen name="Picture" component={PictureDetail}
        />
      </Stack.Navigator>
  );
};
export default ShinigamiNavigation;