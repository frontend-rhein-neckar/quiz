import React, { Component } from 'react';
import './App.css';
import AddUser from './components/AddUser';
import UserList from './components/UserList';
import shortid from 'shortid';

class App extends Component {
  constructor(props) {
    super(props)

    this.adduser = this.adduser.bind(this)
    this.state = {
      users: []
    }
  }

  adduser(e) {
    e.preventDefault()
    if(!e.target.adduser.value)return false
    const newuser = {
      id: shortid.generate(),
      name: e.target.adduser.value,
      //points: 0
      points: Math.floor(Math.random() * 11)
    }
    this.setState({
      users: [...this.state.users, newuser]
    }, () => console.log(this.state))
    e.target.adduser.value = ''
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Quiz</h1>
        </header>
        <AddUser adduser={this.adduser}/>
        <UserList users={this.state.users}/>
      </div>
    );
  }
}

export default App;
