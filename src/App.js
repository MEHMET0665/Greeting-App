import { ReactComponent } from "*.svg";

import React from"react"
class App extends React.Component{
  render(){
    return (
      <div>
      <h1>Hello Guest</h1>
      <label htmlFor="username">Enter you name:</label><br/>
      <input id="username" type="text"/>
      </div>
    );
  }
  
}

export default App;
