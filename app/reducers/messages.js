const ADD_NEW_TEXT = "ADD_NEW_TEXT";
const ADD_NEW_MSG = "ADD_NEW_MSG";

import {saveNewMessage} from '../api/api'





/*var queRef1 = refMsg.child('question1');
var queRef2 = refMsg.child('question2');
*/

/*var queRef1 = queRef1.push({
 author : 'pravin',
 timeStamp : '8:50',
 text : 'Christopher in Message',
});


var queRef2 = queRef2.push({
  author : 'pravin',
  timeStamp : '8:50',
  text : 'Christopher in Message IN Question 2',
})

var uref = ref.push({
  description: 'I eat too much ice cream',
  startTime : '8:50',
  title: 'Christopher',
});
*/
/*queRef2.on('value', function(snapshot) {
    //snapshot.forEach(function(childSnapshot) {
      //var childData = childSnapshot.val();
      console.log(snapshot,"childData")
    //});
});

*/



export const addAllMessage = (messages, selectedQuestion) => {
  console.log(selectedQuestion,"aaaaaaaaaaaaaaaa");
  return {
    type : "ADD_ALL_MSG",
    allMsg : messages,
    selectedQuestion
  }
}

export const addNewText = text => {
  return {
    type: ADD_NEW_TEXT,
    text
  };
};

export const addNewMessage = (message) => {
  return {
    type: ADD_NEW_MSG,
    author: message.author,
    text: message.text,
    timestamp: "11:00"
  };
};

export const addMessage = message => dispatch => {
  const messageWithId = saveNewMessage(message)
  messageWithId.msgPromise.then(() => {
    console.log('Saved in Thunk')
  })
}

const initialState = {
  msgId: 0,
  isFetching: false,
  newMessage: "",
  newHostMsg: "",
  hostId: 0,
  selectedQuestion: 1,
  question1: {
    message1: {
      author: "author1",
      text: "This is text 1",
      timestamp: "11:00"
    },
    message2: {
      author: "author2",
      text: "This is text 2",
      timestamp: "11:00"
    }
  },
  question2: {
    message3: {
      author: "author2",
      text: "This is text 3",
      timestamp: "11:00"
    },
    message4: {
      author: "author1",
      text: "This is text 4",
      timestamp: "11:00"
    }
  }
};

export default function questions(state = initialState, action) {
  switch (action.type) {
    case "ADD_NEW_TEXT":
      return {
        ...state,
        newMessage: action.text
      };

    case "ADD_NEW_MSG":
      const allMessage = state[action.selectedQuestion];

      const newMessage = {
        author: action.hostId,
        text: action.msg,
        timestamp: "11:00"
      };
      return {
        ...state,
        [action.selectedQuestion]: { ...allMessage, [action.msgId]: newMessage }
      };
      case "ADD_ALL_MSG" :
      return {
        ...state,
        [action.selectedQuestion] : {...action.allMsg},
      };

    default:
      return state;
  }
}
