const ADD_NEW_MESSAGE = 'ADD_NEW_MESSAGE'

export const addNewMessage = (text) => {
  return {
    type: ADD_NEW_MESSAGE,
    text
  }
}

const initialState = {
  isFetching: false,
  newMessage: '',
  2: {
    text: 'Hi',
    author: 1,
    timestamp: '11:11',
    votes: 0,
    share: 0,
  },
  3:  {
    text: 'Hi',
    author: 1,
    timestamp: '11:11',
    votes: 0,
    share: 0,
  }
}

export default function questions (state = initialState, action) {
  switch(action.type) {
    case 'ADD_NEW_MESSAGE':
      return {
        ...state,
        newMessage: action.text
      }
    default:
      return state
  }
}
