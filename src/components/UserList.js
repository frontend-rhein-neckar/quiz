import React, { Component } from 'react';

class UserList extends Component {
  compare(a, b) {
    const pointsA = a.points
    const pointsB = b.points
    let comparison = 0;
    if (pointsA > pointsB) {
      comparison = -1;
    } else if (pointsA < pointsB) {
      comparison = 1;
    }
    return comparison;
  }

  render() {
    const userItems = this.props.users.sort(this.compare).map((user, index) =>
      <li key={user.id}>{user.name} {user.points} <button onClick={() => this.props.increment(user.id)}>+1</button> <button onClick={() => this.props.decrement(user.id)}>-1</button></li>
    );
    return (
      <ul>{userItems}</ul>
    );
  }
}

export default UserList;
