import axios from 'axios'
import {ref , refMsg} from '../config'
import {store} from '../store'
import { addAllMessage } from '../reducers/messages'
import { addAllUsers } from '../reducers/users'
import { addAllQuestions } from '../reducers/questions'
console.log(ref, 'ref')



export function listenToQuestions() {
  ref.child('questions/ama1').on('value', (snapshot) => {
    const questions = snapshot.val() || {}
    store.dispatch(addAllQuestions(questions, false));
  })
}

export function listenToMessages(){
    ref.child('messages/question1').on('value' , (snapshot) => {
        const messages = snapshot.val() || {}
        const selectedQuestion = store.getState().questions.selectedQuestion
        store.dispatch(addAllMessage(messages, selectedQuestion,false));
    })
}


export function listenToUsers() {
    ref.child('users').on('value', (snapshot) => {
    const users = snapshot.val() || {}
    store.dispatch(addAllUsers(users));
  })
}



export function saveNewMessage (message) {
    console.log("Save new Message Called", message)
    const msgId = refMsg.child(`${message.qid}`).push().key;
    const msgPromise = refMsg.child(`${message.qid}/${msgId}`).set({text: message.text, author: message.author})
    return {
        msgId,
        msgPromise,
    }
}
