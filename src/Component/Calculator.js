import React, { Component } from 'react';
import './Calculator.css';
import calculate from '../Logic/calculate';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '',
      next: '',
      operation: '',
    };
  }

  Calculate = (e) => {
    const ans = calculate(this.state, e.target.innerText);
    this.setState(ans);
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="Calculator">
        <header className="head">
          <span className="initial-zero">{next || operation || total}</span>
        </header>
        <div className="wrap">
          {' '}
          <button type="button" onClick={this.Calculate} className="calc">
            {' '}
            AC
            {' '}
          </button>
          {' '}
          <button type="button" onClick={this.Calculate} className="calc">
            {' '}
            +/-
            {' '}
          </button>
          {' '}
          <button type="button" onClick={this.Calculate} className="calc">
            {' '}
            %
            {' '}
          </button>
          {' '}
          <button type="button" onClick={this.Calculate} className="calc active">
            {' '}
            <span>&#247;</span>
            {' '}
          </button>
          {' '}
          <button type="button" onClick={this.Calculate} className="calc">
            {' '}
            7
            {' '}
          </button>
          {' '}
          <button type="button" onClick={this.Calculate} className="calc">
            {' '}
            8
            {' '}
          </button>
          {' '}
          <button type="button" onClick={this.Calculate} className="calc">
            {' '}
            9
            {' '}
          </button>
          {' '}
          <button type="button" onClick={this.Calculate} className="calc active">
            {' '}
            x
            {' '}
          </button>
          {' '}
          <button type="button" onClick={this.Calculate} className="calc">
            {' '}
            4
            {' '}
          </button>
          {' '}
          <button type="button" onClick={this.Calculate} className="calc">
            {' '}
            5
            {' '}
          </button>
          {' '}
          <button type="button" onClick={this.Calculate} className="calc">
            {' '}
            6
            {' '}
          </button>
          {' '}
          <button type="button" onClick={this.Calculate} className="calc active">
            {' '}
            -
            {' '}
          </button>
          {' '}
          <button type="button" onClick={this.Calculate} className="calc">
            {' '}
            1
            {' '}
          </button>
          {' '}
          <button type="button" onClick={this.Calculate} className="calc">
            {' '}
            2
            {' '}
          </button>
          {' '}
          <button type="button" onClick={this.Calculate} className="calc">
            {' '}
            3
            {' '}
          </button>
          {' '}
          <button type="button" onClick={this.Calculate} className="calc active">
            {' '}
            +
            {' '}
          </button>
          {' '}
          <button type="button" onClick={this.Calculate} className="zero">
            {' '}
            0
            {' '}
          </button>
          {' '}
          <button type="button" onClick={this.Calculate} className="calc">
            {' '}
            .
            {' '}
          </button>
          {' '}
          <button type="button" onClick={this.Calculate} className="calc active">
            {' '}
            =
            {' '}
          </button>
        </div>
      </div>
    );
  }
}
export default Calculator;
