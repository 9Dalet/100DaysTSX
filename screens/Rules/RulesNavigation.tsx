import React from 'react';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import 'react-native-gesture-handler';

//local files
import RulesHome from './RulesHome';
import RulesDetail from './RulesDetail';

const Stack = createStackNavigator();
const RulesNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        //gestureDirection: 'vertical',
        ...TransitionPresets.ModalPresentationIOS,
      }}>
      <Stack.Screen name="Home" component={RulesHome} />
      <Stack.Screen name="Detail" component={RulesDetail} />
    </Stack.Navigator>
  );
};
export default RulesNavigation;
