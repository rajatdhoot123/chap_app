const SELECTED_QUESTION = "SELECTED_QUESTION";
const NEW_CONVERSATION = "NEW_CONVERSATION";
const ADD_ALL_QUESTIONS = "ADD_ALL_QUESTIONS";
const initialState = {
  isFetching: false,
  selectedQuestion: 'question1',
  ama1: {
    question1: {
      text: "Hi from Mahesh Sharma",
      author: 'author1',
      timestamp: "12:30",
      votes: 0,
      share: 0
    },
    question2: {
      text: "Hi from Rajat Dhoot",
      author: 'author2',
      timestamp: "09:11",
      votes: 0,
      share: 0
    }
  }
};

/*export const newConversationId = (cid, selectedQuestion) => {
  return {
    type: NEW_CONVERSATION,
    cid,
    selectedQuestion
  };
};
*/
export const addAllQuestions = (questions,status) => {
  return {
    type : "ADD_ALL_QUESTIONS",
    allQue : questions,
    isFetching : status,
  }
}

export const selectedQuestion = qid => {
  return {
    type: SELECTED_QUESTION,
    qid: qid
  };
};

export default function questions(state = initialState, action) {

  switch (action.type) {
    case SELECTED_QUESTION:
      return {
        ...state,
        selectedQuestion : action.qid
      };
      case ADD_ALL_QUESTIONS:
      const prevQuestions = state.ama1;
      return {
        ...state,
        ama1 : {...action.allQue},
      };
    /*case NEW_CONVERSATION:
      const prevQuestion = state.ama1[action.selectedQuestion];
      const conv = prevQuestion.conversation;
      const newConv = [...conv, action.cid];
      return {
        ...state,
        [action.selectedQuestion]: {
          ...prevQuestion,
          conversation: newConv
        }
      };*/
    default:
      return state;
  }
}
