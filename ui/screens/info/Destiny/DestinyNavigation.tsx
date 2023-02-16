import React from 'react';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import 'react-native-gesture-handler';

//local files
import DestinyHome from './DestinyHome';
import DestinyDetail from './DestinyDetail';
import PictureDetail from '../PictureDetail';

const Stack = createStackNavigator();
const DestinyNavigation = () => {
  return (
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          //gestureDirection: 'vertical',
          ...TransitionPresets.SlideFromRightIOS,
        }}>
        <Stack.Screen name="Home" component={DestinyHome} 
        />
        <Stack.Screen name="Detail" component={DestinyDetail} 
        />
        <Stack.Screen name="Picture" component={PictureDetail}
        />
      </Stack.Navigator>
  );
};
export default DestinyNavigation;