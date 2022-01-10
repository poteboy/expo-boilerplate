import React from 'react';
import renderer from 'react-test-renderer';
import { TestProvider } from './useTest';

describe(`<TestProvider />`, () => {
  it(`renders correctly`, () => {
    const tree = renderer.create(<TestProvider />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
