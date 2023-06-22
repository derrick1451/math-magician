/** @format */

import React from 'react';
import renderer from 'react-test-renderer';
import Fetch from './Fetch';

describe('Home page component <calculator />', () => {
  test('Snapshot of the home page', () => {
    const quotes = [
      {
        title: 'title',
        author: 'author',
        quote: 'happy coding is cool',
      },
    ];
    const tree = renderer.create(<Fetch quotes={quotes} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
