import React from 'react';
 export default function Calcultor(){
    return(
        <div className='wrapper'>
            <div className="screen">0</div>
            <div className="operator">AC</div>
            <div className="operator">+/-</div>
            <div className="operator">%</div>
            <div className="operator color-change">/</div>
            <div className="number">7</div>
            <div className="number">8</div>
            <div className="number">9</div>
            <div className="operator color-change">*</div>
            <div className="number">4</div>
            <div className="number">5</div>
            <div className="number">6</div>
            <div className="operator color-change">-</div>
            <div className="number">1</div>
            <div className="number">2</div>
            <div className="number">3</div>
            <div className="operator color-change">+</div>
            <div className='number zero'>0</div>
            <div className="number">.</div>
            <div className="operator color-change">=</div>


        </div>
    )
}