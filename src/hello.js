import React, { Component } from 'react';

export class Hello extends Component {
  constructor() {
    super();
    this.state = {
      Name: null
    };
  }

  async componentDidMount() {
    const { Name } = await import('./Name');
    this.setState({ Name });
  }

  render() {
    const { Name } = this.state;

    if (Name === null) {
      return null;
    }

    return (
      <div>
        Hello, <Name name={this.props.name} />
      </div>
    );
  }
}
