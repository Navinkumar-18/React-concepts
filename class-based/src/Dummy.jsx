import React, { Component } from 'react'

export default class Dummy extends Component {
  render() {
constructor(props){
    
    super(props);

    this.state = {
     num1:50,
     num2:500
    }
    this.handleclick = this.handleclick.bind(this);

  }
handleclick = () => {
  this.setState({num1: this.state.num + 1})
}   
this.componentDidMount = () => {
  console.log("Component Did Mount=UseEffect with empty dependency array");
}

this.componentDidUpdate = (prevProps, prevState) => {
  if(prevState.num1 !== this.state.num1){
    console.log("first value changed");
}

    return (
      <div>
        <h1>{this.state.num1}</h1>
        <button onClick={() => this.setState({ num1: this.state.num1 + 1 })}>
           Add Number
        </button>
        <h1>
            {this.state.num2}    
        </h1>
        <button onClick={() => this.setState({ num2: this.state.num2 + 1 })}>
            Add Number 2
        </button>
        
      </div>
    )
  }
}
