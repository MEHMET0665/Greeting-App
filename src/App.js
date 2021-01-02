import React from 'react';
import Form from './components/Form';

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
        <Form onChange={this.changeUserName}/>
      </div>
    );
  }
}

export default App;

