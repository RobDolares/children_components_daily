import React, { Component } from 'react';

export default class ChildComponent extends Component {
  constructor(props){
    super(props)
  }

  render(props) {
    return (
        <div>
          <button id="btn-submit" className="btn btn-lg" onClick={this.props.onClick} type="submit">Submit</button>
        </div>
    );
  }
}
