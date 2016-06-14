import React, { Component } from 'react'
import MessageActions from '../actions/MessageActions'

const moment = require('moment');

export default class AddMessageForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      content: ''
    }
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    if(!this.state.content) return;
    console.log('1. In component');
    MessageActions.addNewMessage(this.state);
    this.setState({content:''});
  }

  render() {
    return (
      <form>
        <div className="input-group">
          <input type="text"
                 className="form-control"
                 id="messageContent"
                 placeholder="What's on your mind?"
                 value={this.state.content}
                 onChange={e => this.setState({content: e.target.value})}
                 />
          <span className="input-group-btn">
            <button className="btn btn-default sendBtn"
                    onClick={this.onSubmit}>
                      Send
            </button>
          </span>
        </div>
      </form>
    )
  }
}
