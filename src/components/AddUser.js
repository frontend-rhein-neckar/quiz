import React, { Component } from 'react';

class AddUser extends Component {
  render() {
    return (
      <div className="AddUser">
        <form onSubmit={this.props.adduser}>
            <input type="text" name="adduser"/>
        </form>
      </div>
    );
  }
}

export default AddUser;
