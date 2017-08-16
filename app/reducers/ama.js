const initialState = {
  isFetching: false,
  id: 1,
  title: 'Ask Me Anything with Mahesh Sharma',
  description: '',
  startTime: '',
  endTime: '',
  status: '',
  host: 1,
  registeredUsers: [2,3],
  questions: [1]
}

export default function questions (state = initialState, action) {
  switch(action.type) {

    default:
      return state
  }
}
