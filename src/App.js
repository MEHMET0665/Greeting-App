import React from 'react';
import Form from './components/Form';
import GreetingMessage from "./components/GreetingMessage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: 'Guest'
    }
 this.changeUserName=this.changeUserName.bind(this)
  }

  changeUserName(name) {
    this.setState({
      userName: name.trim() ? name:"Guest"
    })
  }

  render() {
    return (
      <div>
        <h1>Hello {this.state.userName}</h1>
        <GreetingMessage/>
        <Form onChange={this.changeUserName}/>
      </div>
    );
  }
}

export default App;
