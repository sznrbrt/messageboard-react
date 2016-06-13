import React, { Component } from 'react'

const moment = require('moment');

export default class AddMessageForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      content: '',
      timestamp: ''
    }
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    let now = moment().format("h:mm:ss a").toString();
    if(!this.state.content) return;
    this.state.timestamp = now;
    this.state.id = this.props.nextId;
    this.props.addMessage(this.state);
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
