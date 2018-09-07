import React, { Component } from 'react';

export class Hello extends Component {
  constructor() {
    super();
    this.state = {
      Name: () => <i>Loading...</i>
    };
  }

  componentDidMount() {
    setTimeout(async () => {
      const {
        Name
      } = await import(/* webpackChunkName: "Name", webpackPrefetch: true */
      './Name');
      this.setState({ Name });
    }, 5000);
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
