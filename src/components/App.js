
import React, { Component } from "react";
import './../styles/App.css';

class App extends Component{
  constructor(props){
    super(props)
    this.state = { name: null};
  }
  
  updateText = ()=>{
    this.setState({
      name: document.getElementById("name").value
    });
  }
  render(){
    return (
      <div>
          {/* Do not remove the main div */}
          <p>Enter your name:</p>
          <input id="name" type="text" onChange={this.updateText}></input>
          {
            this.state.name ? <p>Hello {this.state.name}!</p> : null
          }
      </div>
    )
  }
}

export default App
