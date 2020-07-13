import React, { Component } from "react";

class LifecycleCompone extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "sreedhar"
    };
    console.log(constructorA);
  }

  render() {
    return <div></div>;
  }
}

export default LifecycleCompone;
