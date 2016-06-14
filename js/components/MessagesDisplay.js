import React, { Component } from 'react'
import MessageActions from '../actions/MessageActions'

export default class MessagesDisplay extends Component {
  constructor(props){
    super(props);
  }

  render() {
    let messages = this.props.messages.length ? this.props.messages.map(message => {
      return (
        <tr key={message._id}>
          <td>{message.content}</td>
          <td>{message.timestamp}</td>
            <td>
              <button onClick={() => MessageActions.deleteMessage(message._id)}>Delete</button>
            </td>
        </tr>
      )
    }) : []
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Message</th>
            <th>@</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody className="text-left">
          {messages}
        </tbody>
      </table>
    )
  }
}
