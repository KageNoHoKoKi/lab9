import React, { Component } from 'react';

class Counter extends React.Component {
    render() {
      return (
        <div className="Counter">You have clicked {this.props.count} times.</div>
      );
    }
  }


export default Counter; 