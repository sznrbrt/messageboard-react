import AppDispatcher from "../AppDispatcher";
import {ActionTypes} from "../Constants";
import {EventEmitter} from "events";

let _messages = [];

class MessageStore extends EventEmitter {
  constructor(props) {
    super(props);

    AppDispatcher.register(action => {
        switch(action.actionType) {
          case ActionTypes.RECEIVE_MESSSAGES:
              console.log("3. In store");
              _messages = action.messages;
              this.emit("change")
              break;
          default:
              // Do nothing
        }
    })
  }

  getAll() {
    return _messages;
  }
}

export default new MessageStore();
