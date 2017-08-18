const initialState = {
  isFetching: false,
  id: 'ama1',
  title: 'Ask Me Anything with Mahesh Sharma',
  description: '',
  startTime: '',
  endTime: '',
  status: '',
  host: 1,
  registeredUsers: [1,2],
  activeUsers:[1,2],
  questions : [1,2]
}

export default function questions (state = initialState, action) {
  switch(action.type) {

    default:
      return state
  }
}
