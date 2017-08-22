const SELECTED_QUESTION = "SELECTED_QUESTION";
const NEW_CONVERSATION = "NEW_CONVERSATION";
const ADD_QUESTION = 'ADD_QUESTION'
const ADD_ALL_QUESTIONS = "ADD_ALL_QUESTIONS";
import { saveQuestion , saveNewMessage , listenToMessages } from '../api/api'
import { store } from '../store'

const initialState = {
  isFetching: true,
  isFirst: true,
  selectedQuestion: null,
  currentQueId : null,
  ama1: {
   /* question1: {
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
    }*/
  }
};

export const listenALlMsg = qid => (dispatch) => {
  dispatch(selectedQuestion(qid))
    console.log("qid updated")
    listenToMessages(qid);
    //dispatch(updateQID(questionWithId.queId))
}



  export const addQuestion = message => (dispatch) => {
  const questionWithId = saveQuestion(message)
  questionWithId.quePromise
  .then(() => {
    dispatch(updateQID(questionWithId.queId))
  })
/*  .then(() => {
    saveNewMessage(message,store.getState().questions.currentQueId)
  })*/
}

const updateQID = (qid) => {
  return {
    type : "ADD_QUE_ID",
    qid : qid,
  }
}

export const addNewQuestion = (question) => {
  return {
    type: ADD_QUESTION,
    author: question.author,
    text: question.text,
    timestamp: "11:00",
  };
};

export const addAllQuestions = (questions,status,isFirst,qId) => {
  console.log(isFirst)
  return {
    type : "ADD_ALL_QUESTIONS",
    allQue : questions,
    isFetching : status,
    isFirst : isFirst,
    currentQueId : qId,
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
      return {
        ...state,
        isFirst : action.isFirst,
        currentQueId : action.currentQueId,
        ama1 : {...action.allQue},
        isFetching : action.isFetching,
      };
      case "ADD_QUE_ID" :
      return {
        ...state,
        isFirst : false,
        currentQueId : action.qid,
      }

    default:
      return state;
  }
}
