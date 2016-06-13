import AppDispatcher from "../AppDispatcher";
import {ActionTypes} from "../Constants";

let ServerActions = {
  receiveMessages(messages) {
    console.log('2. In ServerActions');
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVE_MESSSAGES,
      messages
    })
  }
}

export default ServerActions;
