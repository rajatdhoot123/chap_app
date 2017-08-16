const SELECTED_QUESTION = 'SELECTED_QUESTION';

const initialState = {
  isFetching: false,
  selectedQuestion : 1,
  1: {
    text: 'Hi',
    author: 1,
    timestamp: '11:11',
    votes: 0,
    share: 0,
    conversation: [2,3]
  },
    2: {
    text: 'Hi',
    author: 2,
    timestamp: '11:11',
    votes: 0,
    share: 0,
    conversation: [2,3]
  },
}



export const selectedQuestion = qid => {
  return {
    type: SELECTED_QUESTION,
    qid: qid
  };
};



export default function questions (state = initialState, action) {
  switch(action.type) {
    case SELECTED_QUESTION :
    return {
        ...state,
        selectedQuestion : action.qid,
      };
    default:
      return state
  }
}
