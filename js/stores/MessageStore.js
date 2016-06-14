import AppDispatcher from "../AppDispatcher";
import {ActionTypes} from "../Constants";
import {EventEmitter} from "events";

let _messages = [];

class MessageStore extends EventEmitter {
  constructor(props) {
    super(props);
      AppDispatcher.register(action => {
          switch(action.actionType) {
            case ActionTypes.RECEIVE_MESSAGES:
                console.log("3. In store");
                _messages = action.messages
                this.emit("change")
                break;
            case ActionTypes.RECEIVE_ONE_MESSAGE:
                console.log("In store");
                _messages.push(action.message);
                this.emit('change');
                break;
          }
      })
    }

  getAll() {
    return _messages;
  }
  startListening(cb) {
    this.on('change', cb)
  }

  stopListening(cb) {
    this.removeListener('change', cb)
  }
}

export default new MessageStore();
