import React, { Component } from 'react';
import './Checkbox.css';

let IDS = 0;

class Checkbox extends Component {
  constructor (props) {
    super(props);

    this.state = {
      id: 'checkbox_' + IDS
    };
    IDS++;
  }

  render() {
    return (
      <div className="Checkbox">
        <input id={this.state.id} type="checkbox" checked={this.props.checked} className="hidden" onChange={this.props.onChange} />
        <label htmlFor={this.state.id}>
          <span>
            <svg width='12px' height='10px' viewBox='0 0 12 10'>
              <polyline points='1.5 6 4.5 9 10.5 1' />
            </svg>
          </span>
          <span>{this.props.children}</span>
        </label>
      </div>
    );
  }
}

export default Checkbox;
