import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MenuKeys, MenuParamList } from './route';
import { MenuListContainer } from '@src/screens/Menu/MenuList/MenuListContainer';

const MenuStack = createNativeStackNavigator<MenuParamList>();

export const MenuStackNavigator: FC = () => {
  return (
    <MenuStack.Navigator screenOptions={{ headerShown: false }}>
      <MenuStack.Screen
        name={MenuKeys.MenuList}
        component={MenuListContainer}
      />
    </MenuStack.Navigator>
  );
};
