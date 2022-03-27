import React, { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabParamList, TabKeys } from './route';
import { HomeStackNavigator } from './HomeNavigator/HomeNavigator';
import { MenuStackNavigator } from './MenuNavigator/MenuNavigator';
import { colors } from '@src/styles';
import { HomeIcon, MenuIcon } from '@src/icons/tabs';

const TabStack = createBottomTabNavigator<TabParamList>();

export const TabStackNavigator: FC = () => {
  return (
    <TabStack.Navigator screenOptions={{ headerShown: false }}>
      <TabStack.Screen
        name={TabKeys.Home}
        component={HomeStackNavigator}
        options={{
          title: 'ホーム',
          tabBarActiveTintColor: colors.Black,
          tabBarInactiveTintColor: colors.Gray,
          tabBarIcon: ({ focused }) => {
            return <HomeIcon focused={focused} />;
          },
        }}
      />
      <TabStack.Screen
        name={TabKeys.Menu}
        component={MenuStackNavigator}
        options={{
          title: 'メニュー',
          tabBarActiveTintColor: colors.Black,
          tabBarInactiveTintColor: colors.Gray,
          tabBarIcon: ({ focused }) => {
            return <MenuIcon focused={focused} />;
          },
        }}
      />
    </TabStack.Navigator>
  );
};
