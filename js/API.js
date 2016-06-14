import {get, post, ajax} from "jquery";
import ServerActions from "./actions/ServerActions";

let API = {
  fetchMessages() {
    console.log('1. In API');
    get('/data/messages').done(resp => {
      ServerActions.receiveMessages(resp);
    })
  },
  sendMessage(message) {
    post('/data/message', message)
      .done((response) => {
        ServerActions.receiveOneMessage(response)
      });
  },
  deleteMessage(id) {
    ajax('/data/message/' + id, {
      method: 'DELETE'
    })
    .done((response) => {
      ServerActions.receiveMessages(response)
    });
  }
};

export default API;
