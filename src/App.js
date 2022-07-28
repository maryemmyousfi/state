import React, { Component } from 'react'
import Counter from './component/Counter'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { show :false };
  }
  handleclick=() => 
  this.setState({show : !this.state.show})
  render() {
    return (
      <div>
      <h1>checkpoint state</h1>
      <button onClick={this.handleclick}>show/hide</button>
      {this.state.show ? <Counter/> : null  }
    

      </div>
    )
  }
}
