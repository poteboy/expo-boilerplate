import React from 'react';
import { Spacer } from './Spacer';
import { NativeBaseProvider } from 'native-base';
import { render } from '@testing-library/react-native';

const size = 20;
const component = (
  <NativeBaseProvider>
    <Spacer size={size} />
  </NativeBaseProvider>
);

describe(`<Spacer />`, () => {
  test(`has a view component`, () => {
    const { findByTestId } = render(component);
    expect(findByTestId('spacer')).toBeDefined();
  });
});
