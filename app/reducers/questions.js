const SELECTED_QUESTION = 'SELECTED_QUESTION';
const NEW_CONVERSATION = 'NEW_CONVERSATION';

const initialState = {
  isFetching: false,
  selectedQuestion : 1,
  1: {
    text: 'Hi',
    author: 1,
    timestamp: '11:11',
    votes: 0,
    share: 0,
    conversation: [21]
  },
    2: {
    text: 'Hi',
    author: 2,
    timestamp: '11:11',
    votes: 0,
    share: 0,
    conversation: [33,35,37]
  },
}




export const newConversationId = (cid,selectedQuestion) => {
  return {
    type: NEW_CONVERSATION,
    cid,
    selectedQuestion,
  };
};

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
      case NEW_CONVERSATION :
      const prevQuestion = state[action.selectedQuestion]
      const conv = prevQuestion.conversation
      const newConv = [...conv, action.cid]
    return {
        ...state,
        [action.selectedQuestion] : {
          ...prevQuestion,
          conversation: newConv
        }
      };
    default:
      return state
  }
}
