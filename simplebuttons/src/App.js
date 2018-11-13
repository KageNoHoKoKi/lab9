import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Components/Button';
import Counter from './Components/Counter';
import DecreaseButton from './Components/DecreaseButton';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.buttonWasClicked = this.buttonWasClicked.bind(this);
    this.buttonWasClicked2 = this.buttonWasClicked2.bind(this);
    this.state = {
      count: 0
    };
  }

  buttonWasClicked() {
    this.setState({
      count: this.state.count + 1
    });
  }

  buttonWasClicked2() {
    this.setState({
      count: this.state.count - 1
    });
  }

  render() {
    return (
      <div className="App">
       
          <Button onClick={this.buttonWasClicked} />
          <DecreaseButton onClick={this.buttonWasClicked2} />
          <Counter count={this.state.count} />
      
      </div>
    );
  }
}


export default App;
