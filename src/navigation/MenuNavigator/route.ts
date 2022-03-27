import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

export const MenuKeys = {
  MenuList: 'Menu/MenuList',
} as const;

export type MenuParamList = {
  [MenuKeys.MenuList]: undefined;
};

export const useMenuNavigation = () =>
  useNavigation<NativeStackNavigationProp<MenuParamList>>();
