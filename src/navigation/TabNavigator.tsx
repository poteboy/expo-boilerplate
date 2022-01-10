import React, { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabParamList, TabKeys } from './route';
import { HomeStackNavigator } from './HomeNavigator/HomeNavigator';

const TabStack = createBottomTabNavigator<TabParamList>();

export const TabStackNavigator: FC = () => {
  return (
    <TabStack.Navigator>
      <TabStack.Screen name={TabKeys.Home} component={HomeStackNavigator} />
    </TabStack.Navigator>
  );
};