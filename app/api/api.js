import axios from 'axios'


export function fetchQuestions(){
    return axios.get('http://localhost:3000/questions');
}
