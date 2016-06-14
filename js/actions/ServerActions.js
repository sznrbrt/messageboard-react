import AppDispatcher from "../AppDispatcher";
import {ActionTypes} from "../Constants";

let ServerActions = {
  receiveMessages(messages) {
    console.log('2. In ServerActions');
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVE_MESSAGES,
      messages
    })
  },
  receiveOneMessage(message) {
    console.log('4. In ServerActions');
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVE_ONE_MESSAGE,
      message
    })
  }
}

export default ServerActions
