const defaultQuestion = {
  isFetching : true,
}

export default function questions(state = defaultQuestion, action) {
  console.log(action.questions,";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;")
  switch (action.type) {
    case 'INITIAL_QUESTIONS':
      return {
        ...state,
        ...action.questions,
        isFetching: action.isFetching,
      };
    default:
      return state;
  }
}
