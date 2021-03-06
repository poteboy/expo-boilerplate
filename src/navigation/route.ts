import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';

// RootStack
export const RootKeys = {
  Tab: 'Root/Tab',
} as const;

export type RootParamList = {
  [RootKeys.Tab]: undefined;
};

export const useRootNavigation = () =>
  useNavigation<NativeStackNavigationProp<RootParamList>>();

// TabStack
export const TabKeys = {
  Home: 'Tab/Home',
  Menu: 'Tab/Menu',
} as const;

export type TabParamList = {
  [TabKeys.Home]: undefined;
  [TabKeys.Menu]: undefined;
};

export const useTabNavigation = () =>
  useNavigation<BottomTabNavigationProp<TabParamList>>();
