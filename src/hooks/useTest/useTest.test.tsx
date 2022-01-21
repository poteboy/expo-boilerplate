import React from 'react';
import { create } from 'react-test-renderer';
import { TestProvider } from './useTest';

describe(`<TestProvider />`, () => {
  it(`renders correctly`, () => {
    const tree = create(<TestProvider />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
