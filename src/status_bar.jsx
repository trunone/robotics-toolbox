import React, { Component } from 'react';
import { View, Text, Label } from 'react-desktop/windows';

export default class extends Component {
  static defaultProps = {
    theme: 'light'
  };

  constructor() {
    super();
  }

  render() {
    return (
      <View
        color={this.props.color}
        background
        verticalAlignment="center"
        horizontalAlignment="right"
        >
        <Label
          background={this.props.connected ? 'green' : 'red'}
          color="white"
          padding="5px"
          >
          {this.props.connected ? 'Connected' : 'Disconnected'}
        </Label>
      </View>
    );
  }
}
