/** @format */

import React from 'react';
import renderer from 'react-test-renderer';
import Calculate from './Calculator';

describe('Calculator page component <Calculator />', () => {
  test('Snapshot of the home page', () => {
    const component = renderer.create(<Calculate />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();

  });
});
