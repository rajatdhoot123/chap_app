export default function updateUserChat (state = {userText : ''} , action) {
  switch (action.type) {
    case 'UPDATE_USER_TEXT' :
      return {
        ...state,
        userText : action.newUserText
      }
      default :
        return state
  }
}
