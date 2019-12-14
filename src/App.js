import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {

  state = {
    username: 'Zakir'
  }

  onInputChangedHandler = (event) => {
    console.log('On Input Changes', event.target.value);
    this.setState({
      username: event.target.value
    });
    console.log(this.state);
  }

  render() {
    return (
      <div className="App AlignCenter">
       <UserInput currentUsername={this.state.username} changed={this.onInputChangedHandler}></UserInput>
        <UserOutput 
          username={this.state.username}
        > 
        </UserOutput>
        <UserOutput username={this.state.username}> </UserOutput>
        <UserOutput username={this.state.username}> </UserOutput>         
       </div>
    );
  }
}

export default App;
