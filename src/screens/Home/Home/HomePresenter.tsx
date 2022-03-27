import React, { FC } from 'react';
import { Header } from '@src/components';
import { View, VStack } from 'native-base';
import { colors } from '@src/styles';

type Props = {};

export const HomePresenter: FC<Props> = () => {
  return (
    <View flex={1} bg={colors.LightGray}>
      <Header title="ホーム" reverse />
      <VStack justifyContent="center"></VStack>
    </View>
  );
};
