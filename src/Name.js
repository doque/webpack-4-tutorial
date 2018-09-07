import React, { Component } from 'react';

export class Name extends Component {
  render() {
    return (
      <span style={{ color: 'red', fontSize: '20px' }}>{this.props.name}</span>
    );
  }
}
