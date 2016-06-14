import API from '../API'

const MessageActions = {
  getAllMessages() {
    API.fetchMessages();
  },
  addNewMessage(message) {
    API.sendMessage(message);
  },
  deleteMessage(id) {
    API.deleteMessage(id);
  }
}

export default MessageActions
