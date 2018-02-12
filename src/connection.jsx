import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-desktop/windows';

export default class extends Component {
  static defaultProps = {
    theme: 'light'
  };

  constructor() {
    super();

    this.server_host = null;
    this.server_port = null;
  }

  render() {
    return (
      <View>
          <TextInput
            ref="input"
    theme={this.props.theme}
    color={this.props.color}
    label="Server IP"
    placeholder="HOST"
    onChange={(e) => {this.server_host = e.target.value;}}
  />
  <TextInput
ref="input"
theme={this.props.theme}
color={this.props.color}
label="Server Port"
placeholder="PORT"
onChange={(e) => {this.server_port = e.target.value;}}
/>
<Button
  push
  color={this.props.color}
  onClick={() => global.robot.connect(this.server_host, this.server_port)}>
        Connect
      </Button>
      <Button
        push
        color={this.props.color}
        onClick={() => global.robot.disconnect()}>
              Disconnect
            </Button>
          </View>
    );
  }
}
