import React, { Component } from 'react';
import './EditArea.css';

import ResultArea from './ResultArea';
import HighlightArea from './HighlightArea';
import Checkbox from './Checkbox';
import wordsCount from '../lib/wordCount';

const ButtonGroup = (props) => {
  return (
    <div className="ButtonGroup" style={props.style}>
      {props.children}
    </div>
  );
}

const Button = (props) => {
  return (
    <button style={props.style} className={'Button' + (props.small ? ' small': '')} onClick={props.onClick}>{props.children}</button>
  );
}

class EditArea extends Component {
  constructor (props) {
    super(props);

    this.state = {
      text: '',
      order: true,
      result: null,
      highlight: null
    };
  }

  clear = () => {
    this.setState({ text: '' });
  }

  updateText = (text) => {
    this.setState({ text: text });
  }

  toggleOrder = (e) => {
    const order = !this.state.order;
    this.setState({ order: order });
  }

  count = () => {
    if (this.state.text === '') return;

    const { text, order } = this.state;
    this.setState({ result: wordsCount(text, order) });
  }

  highlighWord = (word) => {
    this.setState({ highlight: word });
  }

  render() {
    return (
      <div className="EditArea">
        <ButtonGroup style={{ marginBottom: '10px' }}>
          <Button style={{ marginRight: '8px' }} small={true} onClick={this.clear}>Clear area</Button>
          <Checkbox checked={this.state.order} onChange={this.toggleOrder}>Order</Checkbox>
        </ButtonGroup>

        <HighlightArea style={{ marginBottom: '10px' }} onChange={this.updateText} value={this.state.text} highlight={this.state.highlight} />
        <Button style={{ marginBottom: '20px' }} onClick={this.count}>Count words</Button>

        {this.state.result && <ResultArea counts={this.state.result.count} keys={this.state.result.keys} onClick={this.highlighWord} />}
      </div>
    );
  }
}

export default EditArea;
