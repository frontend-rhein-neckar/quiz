import React, { Component } from 'react';
import './UserList.css';

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
      <li key={user.id}>
        <button onClick={() => this.props.removeuser(user.id)} className="remove-user"><span role="img" aria-label="delete">🗑️</span></button>
        {user.name} ({user.points} {user.points === 1 ? 'point' : 'points'})
        <span className="vote-buttons">
          <button onClick={() => this.props.increment(user.id)} className="increment"><span role="img" aria-label="+1">👍</span></button>
          <button onClick={() => this.props.decrement(user.id)} className="decrement"><span role="img" aria-label="-1">👎</span></button>
        </span>
      </li>
    );
    return (
      <ul className="UserList">{userItems}</ul>
    );
  }
}

export default UserList;
