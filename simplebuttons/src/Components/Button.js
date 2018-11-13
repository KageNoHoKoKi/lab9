import React, { Component } from 'react';

class Button extends React.Component {
    render() {
      return (
        <button className="green waves-effect waves-light btn"  onClick={this.props.onClick}> Increase</button>
          
      );
    }
  }

export default Button; 