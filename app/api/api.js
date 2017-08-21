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


/*listeners: {
    '/questions/ama/qid' : true
}
*/

export function listenToQuestions() {
    ref.child("questions/ama1").on("value", snapshot => {
        const questions = snapshot.val() || {};
        store.dispatch(addAllQuestions(questions, false));
        if(!(Object.keys(questions).length === 0)){
        store.dispatch(allQueFetched(false))
        }
        /*questions.forEach((qid) => {
        listenToChanges()
    })
  })*/
    });
}

/*function listenToChanges(qid) {
    if (store.getState().listener.qid) {
        return
    } else ref.child('messages/qid').on('value' , (snapshot) => {
        const messages = snapshot.val() || {}
        const selectedQuestion = store.getState().questions.selectedQuestion
        store.dispatch(addAllMessage(messages, selectedQuestion,false));
        store.dispatch({
            type: 'ADD_LISTENER',
            qid: `messages/${qid}`
        })
    })
}*/

export function listenToMessages() {
    ref.child("messages/question1").on("value", snapshot => {
        const messages = snapshot.val() || {};
        const selectedQuestion = store.getState().questions.selectedQuestion;
        store.dispatch(addAllMessage(messages, selectedQuestion, false));
    });
}

export function listenToUsers() {
    ref.child("users").on("value", snapshot => {
        const users = snapshot.val() || {};
        store.dispatch(addAllUsers(users));
    });
}

export function saveNewMessage(message) {
    console.log("Save new Message Called", message);
    const msgId = refMsg.child(`${message.qid}`).push().key;
    const msgPromise = refMsg
        .child(`${message.qid}/${msgId}`)
        .set({ text: message.text, author: message.author });
    return {
        msgId,
        msgPromise
    };
}
