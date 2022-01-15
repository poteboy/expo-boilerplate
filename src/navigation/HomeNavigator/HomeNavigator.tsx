import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeParamList, HomeKeys } from './route';
import { HomeContainer } from '@src/screens/Home/Home/HomeContainer';

const HomeStack = createNativeStackNavigator<HomeParamList>();

export const HomeStackNavigator: FC = () => {
  return (
    <HomeStack.Navigator screenOptions={{ title: 'ホーム' }}>
      <HomeStack.Screen name={HomeKeys.Home} component={HomeContainer} />
    </HomeStack.Navigator>
  );
};
