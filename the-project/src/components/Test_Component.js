import React, { Component } from 'react';

class TestComponent extends Component {

  render(){
    console.log(this.props.data);
    return (
      <h1>THIS IS A TEST</h1>
    )
  }
}

export default TestComponent
