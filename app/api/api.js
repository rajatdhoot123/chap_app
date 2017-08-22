import axios from "axios";
import { ref, refMsg } from "../config";
import { store } from "../store";
import { addAllMessage , allQueFetched} from "../reducers/messages";
import { addAllUsers } from "../reducers/users";
import { addAllQuestions } from "../reducers/questions";
console.log(ref, "ref");

export function generateQidInUser(activeUser){
    const qidId = ref.child(`users/${activeUser}`).push().key;
    const userPromise = ref.child(`/users/${activeUser}/qid`).set({key : qidId})
    const msgKeyPromise = ref.child(`/messages/${qidId}`).set({key : qidId})
}

export function fetchQuestion (activeUser) {
    console.log("fetchQuestionCallled")
  return ref.child(`users/${activeUser}`).once('value')
    .then((snapshot) => {var queId = snapshot.val() || {}
    })
}

export function listenToQuestions() {
    ref.child("questions/ama1").on("value", snapshot => {
        const questions = snapshot.val() || {};
        store.dispatch(addAllQuestions(questions, false , true , null));
        Object.keys(questions).map((qid) => {
            if(questions[qid].author === "user1"){
            store.dispatch(addAllQuestions(questions,false,false,qid))
            }
        })
        if(!(Object.keys(questions).length === 0)){
        store.dispatch(allQueFetched(false))
        }
    });
}




export function listenToMessages(question) {
    const selectedQuestion = store.getState().questions.selectedQuestion;
    ref.child(`messages/${selectedQuestion}`).on("value", snapshot => {
        const messages = snapshot.val() || {};
        store.dispatch(addAllMessage(messages, selectedQuestion, false));
    });
}

export function listenToUsers() {
    ref.child("users").on("value", snapshot => {
        const users = snapshot.val() || {};
        store.dispatch(addAllUsers(users));
    });
}


export function saveNewMessage(message , qid) {
    const queId = store.getState().questions.currentQueId
    const msgId = ref.child(`messages/${queId}`).push().key;
    const msgPromise = refMsg
        .child(`${queId}/${msgId}`)
        .set({ text: message.text, author: message.author });
    return {
        msgId,
        msgPromise
    };
}


export function saveQuestion(message) {
    const queId = ref.child(`question/ama1/${message.qid}`).push().key;
    const quePromise = ref
        .child(`questions/ama1/${queId}`)
        .set({ text: message.text, author: message.author });
    return {
        queId,
        quePromise
    };
}

/*if isFirst == true
questions.forEach((question) => {
    question.author == currentLogin.author ? isFirst = false
})*/
