/** @format */

import React from 'react';
import renderer from 'react-test-renderer';
import Home from './Home';

describe('Home page component <Home />', () => {
  test('Snapshot of the home page', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
