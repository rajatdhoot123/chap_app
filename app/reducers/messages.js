const ADD_NEW_TEXT = 'ADD_NEW_TEXT'
const ADD_NEW_MSG = 'ADD_NEW_MSG'


export const addNewText = (text) => {
  return {
    type: ADD_NEW_TEXT,
    text
  }
}


export const addNewMessage = (msg,hostId,selectedQuestion,msgId) => {
  return {
    type: ADD_NEW_MSG,
    msg,
    hostId,
    selectedQuestion,
    msgId
  }
}

const initialState = {
  msgId : 0,
  isFetching: false,
  newMessage: '',
  newHostMsg: '',
  hostId:0,
  selectedQuestion : 1,
  21: {
    text: 'Hi',
    author: 1,
    timestamp: '11:11',
    votes: 0,
    share: 0,
  },
  6: {
    text: 'Hi',
    author: 1,
    timestamp: '11:11',
    votes: 0,
    share: 0,
  },
  33: {
    text: 'Created By Rajat Dhoot',
    author: 2,
    timestamp: '11:11',
    votes: 0,
    share: 0,
  },
  35: {
    text: 'Created By Rajat Dhoot',
    author: 2,
    timestamp: '11:11',
    votes: 0,
    share: 0,
  },
  37: {
    text: 'Created By Rajat Dhoot',
    author: 2,
    timestamp: '11:11',
    votes: 0,
    share: 0,
  }
}





export default function questions (state = initialState, action) {
  switch(action.type) {
    case 'ADD_NEW_TEXT':
      return {
        ...state,
        newMessage: action.text
      }

      case 'ADD_NEW_MSG':
        return {
          ...state,
          [action.msgId]: {
            text: action.msg,
            author: action.hostId,
            timestamp: '11:11',
            votes: 0,
            share: 0,
          },
          newHostMsg : action.msg,
          hostId : action.hostId,
          selectedQuestion: action.selectedQuestion,
        }
    default:
      return state
  }
}
