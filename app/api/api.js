import axios from 'axios'
import {ref , refMsg} from '../config'
import {store} from '../store'
import { addAllMessage } from '../reducers/messages'

console.log(ref, 'ref')

export function listenToQuestions() {
  ref.child('questions/question1').on('value', (snapshot) => {
    const questions = snapshot.val() || {}
    console.log('questions', questions)
  })
}

export function listenToMessages(){
    ref.child('messages/question1').on('value' , (snapshot) => {
        const messages = snapshot.val() || {}
        const selectedQuestion = store.getState().questions.selectedQuestion
        store.dispatch(addAllMessage(messages, selectedQuestion));
        console.log('message1234' , messages);
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
