import React, { Component } from 'react';
import './ResultArea.css';

class ResultArea extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: null
    }
  }

  handleClick = (key) => {
    this.props.onClick(key);
    this.setState({ selected: key });
  }

  render () {
    return (
      <div className="ResultArea">
        {this.props.keys.map((key, index) => {
          return (
            <div className={'Card' + (this.state.selected === key ? ' selected': '')} key={index} onClick={() => this.handleClick(key)}>
              <span className="key">{key}</span>
              <span>{this.props.counts[key]}</span>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ResultArea;
