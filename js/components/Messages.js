import React, { Component } from 'react'
import MessagesDisplay from './MessagesDisplay'
import AddMessageForm from './AddMessageForm'

const moment = require('moment');

export default class Messages extends Component {
  constructor(props){
    super(props);

    this.state = {
      messages: []
    }

    this.addMessage = this.addMessage.bind(this);
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
            <AddMessageForm addMessage={this.addMessage} nextId={this.state.messages.length} />
        </div>

        <div className="col-xs-12">
          <MessagesDisplay messages={this.state.messages} />
        </div>

      </div>
    )
  }
}
