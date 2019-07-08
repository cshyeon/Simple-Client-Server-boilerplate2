import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import * as actions from '../store/miniApps/friend/state';

import logo from 'assets/logo.svg';

class Home extends Component {
  getRandomId() {    
    const maxId = 10;
    const randomId = Math.floor(Math.random() * maxId);
    return randomId;
  }
  /* redux test */
  onAdd = () => {
    const friend = {id: this.getRandomId(), name: 'david', age: 23};
    this.props.addFriend(friend);
  }
  onRemove = () => {
    const removeId = this.getRandomId();
    const friend = {id: removeId};
    this.props.removeFriend(friend);
  }

  render() {
    return (
      <div className={classNames('home')}>   
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={this.onAdd}>add 친구</button>
        <button onClick={this.onRemove}>remove 친구</button>
        {JSON.stringify(this.props.friends)}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {friends: state.friend.friends};
};
// const mapDispatchToProps = dispatch => {
//   return {
//     addFriend: friend => {
//       dispatch(addFriend(friend));
//     }
//   };
// };

export default connect(mapStateToProps, actions)(Home);
