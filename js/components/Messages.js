import React, { Component } from 'react'
import MessagesDisplay from './MessagesDisplay'
import AddMessageForm from './AddMessageForm'
import MessageStore from '../stores/MessageStore'
import MessageActions from '../actions/MessageActions'
import API from '../API.js'

const moment = require('moment');

let _getAppState = () => {
  return { messages: MessageStore.getAll() };
}

export default class Messages extends React.Component {
  constructor(props){
    super(props);

    this.state = _getAppState();
    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    MessageActions.getAllMessages();
    MessageStore.startListening(this._onChange);
  }

  componentWillUnmount() {
    MessageStore.stopListening(this._onChange)
  }

  _onChange() {
    console.log("4. In the view");
    this.setState( _getAppState() );
  }

  addMessage(message) {
    this.setState({messages: this.state.messages.concat(message)});
  }

  render() {
    return (
      <div className="text-center row">
        <h1>Messages</h1>

        <div className="col-xs-6 col-xs-offset-3">
            <h3>New Message</h3>
            <AddMessageForm addMessage={this.addMessage} />
        </div>

        <div className="col-xs-12">
          <MessagesDisplay messages={this.state.messages} />
        </div>

      </div>
    )
  }
}
