import React, { Component } from 'react';
import './AddUser.css';
class AddUser extends Component {
  render() {
    return (
      <div className="AddUser">
        <form onSubmit={this.props.adduser} autoComplete="off">
            <input type="text" name="adduser" placeholder="enter name"/>
        </form>
      </div>
    );
  }
}

export default AddUser;
