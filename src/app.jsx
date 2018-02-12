import React, { Component, StyleSheet } from 'react';
import { NavPane, NavPaneItem, Text, View, Label } from 'react-desktop/windows';
import Robot from './robotInterface'

const StatusBar = require('./status_bar').default;

export default class extends Component {
  static defaultProps = {
    theme: 'light'
  };

  constructor() {
    super();
    this.state = {
      selected: 'Main',
      connected: false,
      hiddenJog: true
    }
    global.robot = new Robot("SCARA");
    global.robot.on('connect', () => {
      this.setState({connected: true, hiddenJog: false});
    });
    global.robot.on('disconnect', () => {
      this.setState({connected: false, hiddenJog: true});
    });
  }

  render() {
    return (
      <View>
      <View layout="vertical">
        <StatusBar connected={this.state.connected} />
        <NavPane
          height="100%"
          push
          color={this.props.color}
          theme={this.props.theme}
          >
          {this.renderItem('Main', './main')}
          {this.renderItem('Connection', './connection')}
          {this.renderItem('Project', './project')}
          {this.renderItem('Point', './point')}
        </NavPane>
      </View>
      <View hidden={this.state.hiddenJog}>
        <Text>Jog Panel</Text>
      </View>
      </View>
    );
  }

  renderItem(title, content) {
    const Content = require(content).default;
    return (
      <NavPaneItem
        title={title}
        icon={this.renderIcon(title)}
        theme={this.props.theme}
        background="#ffffff"
        selected={this.state.selected === title}
        onSelect={() => this.setState({ selected: title })}
        padding="10px 20px"
        push
      >
        <Content />
      </NavPaneItem>
    );
  }

  renderIcon(name) {
    switch(name) {
    case 'Main':
      return (<img />
      );
    case 'Connection':
      return (<img />
      );
    case 'Project':
      return (<img />
      );
    }
  }
}
