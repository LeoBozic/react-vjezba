import React, { Component } from "react";

export class Class1 extends Component {
  render() {
    const { ime, godine } = this.props;
    return (
      <div>
        {ime} {godine}
      </div>
    );
  }
}

export default Class1;
