export default function updateHostChat (state = {hostText : ''} , action) {
  switch (action.type) {
    case 'UPDATE_USER_TEXT' :
      return {
        ...state,
        hostText : action.newHostText
      }
      default :
        return state
  }
}
