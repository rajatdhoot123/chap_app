import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { store } from "./store";
import { Host, Founder, Admin, Home, Ama , Audience } from "./components";
import { Provider, connect } from "react-redux";
import { listenToQuestions, listenToMessages } from './api/api'

import { ref , refQue , refMsg } from './config'

var queRef1 = refMsg.child('question1');
var queRef2 = refMsg.child('question2');




listenToQuestions();
listenToMessages();


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
queRef2.on('value', function(snapshot) {
    //snapshot.forEach(function(childSnapshot) {
      //var childData = childSnapshot.val();
      console.log(snapshot,"childData")
    //});
});

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/host" component={Host} />
            <Route exact path="/founder" component={Founder} />
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/admin/ama" component={Ama} />
            <Route exact path="/admin/ama/:id/modify" component={Ama} />
            <Route exact path="/audience" component={Audience} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
