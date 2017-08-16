const initialState = {
  isFetching: false,
  1: {
    text: 'Hi',
    author: 1,
    timestamp: '11:11',
    votes: 0,
    share: 0,
    conversation: [2,3]
  }
}

export default function questions (state = initialState, action) {
  switch(action.type) {

    default:
      return state
  }
}
