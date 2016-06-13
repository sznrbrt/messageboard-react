import {get} from "jquery";
import ServerActions from "./actions/ServerActions";

let API = {
  fetchMessages() {
    console.log('1. In API');
    get('/data/messages').done(resp => {
      ServerActions.receiveMessages(resp);
    })
  }
};

export default API;
