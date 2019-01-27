import React, { Component } from 'react';
import './HighlightArea.css';

class HighlightArea extends Component {
  constructor(props) {
    super(props);

    this.state = {
      highlights: null
    };
  }

  componentDidUpdate() {
    this.refs.textarea.scrollTop = this.state.scrollTop;
  }

  handleChange = (event) => {
    const text = event.target.value;
    this.props.onChange(text);
  }

  handleScroll = (event) => {
    const scroll = event.target.nodeName.toLowerCase() === 'textarea' ? this.refs.textarea.scrollTop : this.refs.backdrop.scrollTop;

    this.refs.textarea.scrollTop = scroll;
    this.refs.backdrop.scrollTop = scroll;
  }

  applyHighlights = (text, word) => {
    return text
        .replace(/\n$/g, '\n\n')
        .replace(new RegExp('(?<= |^)'+word+'(?= |,|.|$)', 'gmi'), '<mark>$&</mark>');
  }

  componentWillReceiveProps (nextProps) {
    if (!nextProps.highlight) {
      this.setState({ highlights: null });
      return;
    }

    const highlights = this.applyHighlights(this.refs.textarea.value, nextProps.highlight);
    this.setState({ highlights: highlights });
  }

  render() {
    const placeholder = this.props.placeholder || 'Type in this area';
    return (
      <div className="HighlightArea" style={this.props.style}>
        <div ref="backdrop" className="Highlight-backdrop" onScroll={this.handleScroll}>
          <div className="Highlights" dangerouslySetInnerHTML={{__html: this.state.highlights}}></div>
        </div>
        <textarea
          ref="textarea"
          className="TextArea"
          cols={this.props.cols || '100'}
          rows={this.props.rows || '20'}
          value={this.props.value}
          placeholder={placeholder}
          onFocus={(event) => event.target.placeholder = ''}
          onBlur={(event) => event.target.placeholder = placeholder}
          onChange={this.handleChange}
          onScroll={this.handleScroll}
        ></textarea>
      </div>
    );
  }
}

export default HighlightArea;
