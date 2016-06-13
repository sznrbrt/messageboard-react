import React, { Component } from 'react'

export default class MessagesDisplay extends Component {
  constructor(props){
    super(props);

  }
  render() {
    let messages = [];
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Message</th>
            <th>@</th>
          </tr>
        </thead>
        <tbody className="text-left">
          {messages}
        </tbody>
      </table>
    )
  }
}
