const ADD_NEW_TEXT = "ADD_NEW_TEXT";
const ADD_NEW_MSG = "ADD_NEW_MSG";
const ALL_QUE_GET = "ALL_QUE_GET"
import {ADD_QUESTION , selectedQuestion , addQuestion } from './questions'
import {saveNewMessage} from '../api/api'


export const addAllMessage = (messages, selectedQuestion,status) => {
  return {
    type : "ADD_ALL_MSG",
    allMsg : messages,
    selectedQuestion,
    isFetching : status,
  }
}

export const addNewText = text => {
  return {
    type: ADD_NEW_TEXT,
    text
  };
};

export const allQueFetched = status => {
  return {
    type: ALL_QUE_GET,
    isFetching : status
  };
};

export const addNewMessage = (message) => {
  return {
    type: ADD_NEW_MSG,
    author: message.author,
    text: message.text,
    timestamp: "11:00"
  };
};

export const addMessage = message => (dispatch, getState) => {
  const state = getState()
  if(state.questions.isFirst){dispatch(addQuestion(message)) }
  else{
    const messageWithId = saveNewMessage(message)
    messageWithId.msgPromise.then(() => {
    console.log('Saved in Thunk')
  })
  }
}

const initialState = {
  msgId: 0,
  isFetching: true,
  newMessage: "",
  newHostMsg: "",
  hostId: 0,
  selectedQuestion: "Ks7QIk4xxl4eBCVtyO4",
  /*question1: {
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
  }*/
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
      case "ADD_ALL_MSG" :
      return {
        ...state,
        [action.selectedQuestion] : {...action.allMsg},
        /*isFetching : action.isFetching,*/
      };
/*      case ALL_QUE_GET :
      return {
        ...state,
        isFetching : action.isFetching,
      };
*/
    default:
      return state;
  }
}
