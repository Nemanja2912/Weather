import React, { Component } from "react";

class Error extends Component {
  state = {};
  render() {
    return (
      <div className={this.props.error ? "error error-open" : "error"}>
        We have some problem with this city. <br /> Please, try again later.
      </div>
    );
  }
}

export default Error;
