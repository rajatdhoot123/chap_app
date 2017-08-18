const ADD_NEW_TEXT = "ADD_NEW_TEXT";
const ADD_NEW_MSG = "ADD_NEW_MSG";

export const addNewText = text => {
  return {
    type: ADD_NEW_TEXT,
    text
  };
};

export const addNewMessage = (msg, hostId, selectedQuestion, msgId) => {
  return {
    type: ADD_NEW_MSG,
    msg,
    hostId,
    selectedQuestion,
    msgId
  };
};

const initialState = {
  msgId: 0,
  isFetching: false,
  newMessage: "",
  newHostMsg: "",
  hostId: 0,
  selectedQuestion: 1,
  question1: {
    message1: {
      author: "author1",
      text: "This is text 1",
      timestamp: "11:00"
    },
    message2: {
      author: "author2",
      text: "This is text 2",
      timestamp: "11:00"
    }
  },
  question2: {
    message3: {
      author: "author2",
      text: "This is text 3",
      timestamp: "11:00"
    },
    message4: {
      author: "author1",
      text: "This is text 4",
      timestamp: "11:00"
    }
  }
};

export default function questions(state = initialState, action) {
  switch (action.type) {
    case "ADD_NEW_TEXT":
      return {
        ...state,
        newMessage: action.text
      };

    case "ADD_NEW_MSG":
      const allMessage = state[action.selectedQuestion];
      const newMessage = {
        author: action.hostId,
        text: action.msg,
        timestamp: "11:00"
      };
      return {
        ...state,
        [action.selectedQuestion]: { ...allMessage, [action.msgId]: newMessage }
      };
    /*return {
        ...state,
        [action.msgId]: {
          text: action.msg,
          author: action.hostId,
          timestamp: "11:11",
          votes: 0,
          share: 0
        },
        newHostMsg: action.msg,
        hostId: action.hostId,
        selectedQuestion: action.selectedQuestion
      };*/
    default:
      return state;
  }
}
