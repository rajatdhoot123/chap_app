import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { store } from "./store";
import { Host, Founder, Admin,Home,Ama} from "./components";
import { Provider, connect } from "react-redux";
import {ref} from './config'

ref.once('value').then((snapshot) => {
  console.log(snapshot.val()[1])
})

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
          </Switch>
        </Router>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
