import React, { useState } from 'react';
import calculate from '../logic/calculate';

export default function Calcultor() {
  const [calculation, setCalculation] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  function HandleClick(value) {
    const update = calculate(calculation, value);
    setCalculation(update);
  }

  return (
    <div className="wrapper">
      <div className="screen">
        {calculation.total}
        {calculation.operation}
        {calculation.next}
      </div>
      <button type="button" onClick={() => { HandleClick('AC'); }} className="operator">AC</button>
      <button type="button" onClick={() => { HandleClick('+/-'); }} className="operator">+/-</button>
      <button type="button" onClick={() => { HandleClick('%'); }} className="operator">%</button>
      <button type="button" onClick={() => { HandleClick('÷'); }} className="operator color-change">÷</button>
      <button type="button" onClick={() => { HandleClick('7'); }} className="number">7</button>
      <button type="button" onClick={() => { HandleClick('8'); }} className="number">8</button>
      <button type="button" onClick={() => { HandleClick('9'); }} className="number">9</button>
      <button type="button" onClick={() => { HandleClick('x'); }} className="operator color-change">*</button>
      <button type="button" onClick={() => { HandleClick('4'); }} className="number">4</button>
      <button type="button" onClick={() => { HandleClick('5'); }} className="number">5</button>
      <button type="button" onClick={() => { HandleClick('6'); }} className="number">6</button>
      <button type="button" onClick={() => { HandleClick('-'); }} className="operator color-change">-</button>
      <button type="button" onClick={() => { HandleClick('1'); }} className="number">1</button>
      <button type="button" onClick={() => { HandleClick('2'); }} className="number">2</button>
      <button type="button" onClick={() => { HandleClick('3'); }} className="number">3</button>
      <button type="button" onClick={() => { HandleClick('+'); }} className="operator color-change">+</button>
      <button type="button" onClick={() => { HandleClick('0'); }} className="number zero">0</button>
      <button type="button" onClick={() => { HandleClick('.'); }} className="number">.</button>
      <button type="button" onClick={() => { HandleClick('='); }} className="operator color-change">=</button>

    </div>
  );
}
