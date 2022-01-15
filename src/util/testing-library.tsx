import React, { FC } from 'react';
import { NativeBaseProvider } from 'native-base';
import { theme } from '@src/styles';
import {
  render as Render,
  RenderOptions,
  RenderAPI,
} from '@testing-library/react-native';

const ProviderWrapper: FC = ({ children }) => {
  return <NativeBaseProvider theme={theme}>{children}</NativeBaseProvider>;
};

export const render = (
  component: React.ReactElement<any, string | React.JSXElementConstructor<any>>,
  options?: RenderOptions,
): RenderAPI => {
  return Render(component, { wrapper: ProviderWrapper, ...options });
};
