import React, { Component } from 'react';
import './App.css';
import AddUser from './components/AddUser';
import UserList from './components/UserList';
import shortid from 'shortid';

class App extends Component {
  constructor(props) {
    super(props)

    this.adduser = this.adduser.bind(this)
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)

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
      points: 0
    }
    this.setState({
      users: [...this.state.users, newuser]
    })
    e.target.adduser.value = ''
  }

  increment(id) {
    const index = this.state.users.findIndex(user => user.id === id)
    this.setState({
      users: this.state.users
          .slice(0, index)
          .concat([
            Object.assign(
              {},
              this.state.users[index],
              {points:this.state.users[index].points + 1}
            )]
          )
          .concat(this.state.users.slice(index + 1))
    })
  }

  decrement(id) {
    const index = this.state.users.findIndex(user => user.id === id)
    if(this.state.users[index].points){
      this.setState({
        users: this.state.users
            .slice(0, index)
            .concat([
              Object.assign(
                {},
                this.state.users[index],
                {points:this.state.users[index].points - 1}
              )]
            )
            .concat(this.state.users.slice(index + 1))
      })
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Quiz</h1>
        </header>
        <AddUser adduser={this.adduser}/>
        <UserList users={this.state.users} increment={this.increment} decrement={this.decrement}/>
      </div>
    );
  }
}

export default App;
