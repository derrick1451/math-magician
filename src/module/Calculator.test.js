/** @format */

import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen, fireEvent } from '@testing-library/react';
import PropTypes from 'prop-types';
import Calculate from './Calculator';

const Button = ({ onClick, children }) => (
  <button type="button" onClick={onClick}>{children}</button>
);

describe('Calculator page component <Calculator />', () => {
  test('Snapshot of the home page', () => {
    const component = renderer.create(<Calculate />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('calls onClick prop when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>AC</Button>);
    fireEvent.click(screen.getByText(/AC/i));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};
