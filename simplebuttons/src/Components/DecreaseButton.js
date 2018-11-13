import React, { Component } from 'react';

class DecreaseButton extends React.Component {
    render() {
      return (
        <button onClick={this.props.onClick} className="red waves-effect waves-light btn">
          Decrease
        </button>
      );
    }
  }

export default DecreaseButton; 