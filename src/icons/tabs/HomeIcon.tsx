import React, { FC } from 'react';
import { createIcon } from 'native-base';
import { Path } from 'react-native-svg';
import { colors } from '@src/styles';

export const HomeIcon: FC<{ focused: boolean }> = ({ focused }) => {
  const Icon = createIcon({
    viewBox: '0 0 23 23',
    path: [
      <Path
        d="M22.1569 10.8954L12.0912 0.242626C12.0187 0.165717 11.9326 0.104701 11.8379 0.0630691C11.7431 0.0214378 11.6415 8.80315e-06 11.5389 8.80315e-06C11.4363 8.80315e-06 11.3347 0.0214378 11.2399 0.0630691C11.1452 0.104701 11.0591 0.165717 10.9866 0.242626L0.920938 10.8954C0.627691 11.206 0.461519 11.6279 0.461519 12.0679C0.461519 12.9815 1.16287 13.7243 2.0255 13.7243H3.08607V21.3256C3.08607 21.7837 3.43553 22.1539 3.86806 22.1539H9.97492V16.3564H12.7119V22.1539H19.2097C19.6423 22.1539 19.9917 21.7837 19.9917 21.3256V13.7243H21.0523C21.4677 13.7243 21.8661 13.5509 22.1593 13.2377C22.7678 12.5907 22.7678 11.5425 22.1569 10.8954Z"
        fill={focused ? 'black' : colors.Gray}
      />,
    ],
  });
  return <Icon size={'sm'} />;
};
