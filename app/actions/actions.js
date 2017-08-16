import { fetchQuestions } from '../api/api'
const INITIAL_QUESTIONS = "INITIAL_QUESTIONS";
const UPDATE_USER_TEXT = 'UPDATE_USER_TEXT';
const UPDATE_HOST_TEXT = 'UPDATE_USER_TEXT';


export function getAllQuestions(){
    return (dispatch) => {
        dispatch(getQuestionData(true,null))
        fetchQuestions()
        .then((response) => {
        dispatch(getQuestionData(false,response.data))
      })
    }
}


function getQuestionData (status,data){
  return {
    type : INITIAL_QUESTIONS,
    isFetching : status,
    questions : data,
  }
}

export function updateUserChat (newUserText) {
  return {
    type : UPDATE_USER_TEXT,
    newUserText,
  }
}

export function updateHostChat (newHostText) {
  return {
    type : UPDATE_HOST_TEXT,
    newHostText,
  }
}
