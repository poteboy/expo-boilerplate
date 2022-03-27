import React, { FC, memo } from 'react';
import { Header } from '@src/components';
import { View } from 'native-base';
import { colors } from '@src/styles';

type Props = {};

export const MenuListPresenter: FC<Props> = memo(() => {
  return (
    <View flex={1} bg={colors.LightGray}>
      <Header title="メニュー" reverse />
    </View>
  );
});
