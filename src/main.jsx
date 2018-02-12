import React, { Component } from 'react';
import { View, Text } from 'react-desktop/windows';

export default class extends Component {
  static defaultProps = {
    theme: 'light'
  };

  render() {
    return (
        <Text color={this.props.theme === 'dark' ? 'white' : '#333'}>Hello World</Text>
    );
  }
}
