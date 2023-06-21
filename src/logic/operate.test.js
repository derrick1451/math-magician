/** @format */

import operate from './operate';

describe('Operator testing', () => {
  test('The 1 plus 2 should be 3', () => {
    const result = operate(1, 2, '+');
    expect(result).toBe('3');
  });
  test('The 1 minus 2 should be -1', () => {
    const result = operate(1, 2, '-');
    expect(result).toBe('-1');
  });

  test('The 1 multiply 2 should be 2', () => {
    const result = operate(1, 2, 'x');
    expect(result).toBe('2');
  });

  test('The 1 division 2 should be 0.5', () => {
    const result = operate(1, 2, '÷');
    expect(result).toBe('0.5');
  });
});
