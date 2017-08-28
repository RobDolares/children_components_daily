import React, { Component } from 'react';

export default class DisplayComponent extends Component {
  render() {
    return (
      <div className="card-block col-lg-6 offset-lg-3">
        <h4 className="card-block">State, props, children, function, fun!</h4>
        <h6 className="text-muted"> Message:</h6>
        <p className="card-block card">{this.props.sayWhat}</p>
      </div>
    );
  }
}
