/* eslint-disable */
import React, { useState } from 'react';
import './Calculator.css';
import calculate from '../Logic/calculate';


const Calculator = ()=> {
  const [object, setObject] = useState({
    total: '',
    next: '',
    operation: ''
  })

  const Calculator = (e) => {
    setObject(calculate(object, e.target.innerText));
  }
  return (
    <div className="Calculator">
    <header className="head">
      <span className="initial-zero">{object.next || object.operation || object.total}</span>
    </header>
    <div className="wrap">
      {' '}
      <button type="button" onClick={Calculator} className="calc">
        {' '}
        AC
        {' '}
      </button>
      {' '}
      <button type="button" onClick={Calculator} className="calc">
        {' '}
        +/-
        {' '}
      </button>
      {' '}
      <button type="button" onClick={Calculator} className="calc">
        {' '}
        %
        {' '}
      </button>
      {' '}
      <button type="button" onClick={Calculator} className="calc active">
        {' '}
        <span>&#247;</span>
        {' '}
      </button>
      {' '}
      <button type="button" onClick={Calculator} className="calc">
        {' '}
        7
        {' '}
      </button>
      {' '}
      <button type="button" onClick={Calculator} className="calc">
        {' '}
        8
        {' '}
      </button>
      {' '}
      <button type="button" onClick={Calculator} className="calc">
        {' '}
        9
        {' '}
      </button>
      {' '}
      <button type="button" onClick={Calculator} className="calc active">
        {' '}
        x
        {' '}
      </button>
      {' '}
      <button type="button" onClick={Calculator} className="calc">
        {' '}
        4
        {' '}
      </button>
      {' '}
      <button type="button" onClick={Calculator} className="calc">
        {' '}
        5
        {' '}
      </button>
      {' '}
      <button type="button" onClick={Calculator} className="calc">
        {' '}
        6
        {' '}
      </button>
      {' '}
      <button type="button" onClick={Calculator} className="calc active">
        {' '}
        -
        {' '}
      </button>
      {' '}
      <button type="button" onClick={Calculator} className="calc">
        {' '}
        1
        {' '}
      </button>
      {' '}
      <button type="button" onClick={Calculator} className="calc">
        {' '}
        2
        {' '}
      </button>
      {' '}
      <button type="button" onClick={Calculator} className="calc">
        {' '}
        3
        {' '}
      </button>
      {' '}
      <button type="button" onClick={Calculator} className="calc active">
        {' '}
        +
        {' '}
      </button>
      {' '}
      <button type="button" onClick={Calculator} className="zero">
        {' '}
        0
        {' '}
      </button>
      {' '}
      <button type="button" onClick={Calculator} className="calc">
        {' '}
        .
        {' '}
      </button>
      {' '}
      <button type="button" onClick={Calculator} className="calc active">
        {' '}
        =
        {' '}
      </button>
    </div>
  </div>
  )
}

export default Calculator;