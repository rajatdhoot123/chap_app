import axios from 'axios'
import {ref} from '../config'

console.log(ref, 'ref')

export function listenToQuestions() {
  ref.child('questions').on('value', (snapshot) => {
    const questions = snapshot.val() || {}
  })
}

export function fetchQuestions(){
    return axios.get('http://localhost:3000/questions');
}
