import React from "react";
import { connect } from "react-redux";
import { store } from "../store";
import { selectedQuestion ,questionFetched} from "../reducers/questions";
import { refQue } from "../config";
import { Router } from "react-router";

/*refQue.on("value", snapshot => {
    var myObj = snapshot.val().ama1;
    for (const [k, v] of Object.entries(myObj)) {
        console.log(`Here is key `, k, `and here is value`, v);
    }
});*/

const ctime = "13:32";
const UserChatTime = props =>
    <span className="chat-time">
        {props.time}
    </span>;
const UserInput = props => {
    return (
        <p>
            {props.userText}
        </p>
    );
};


export default class UserViewChat extends React.Component {

    handleChatDiv(qid) {
        this.props.dispatch(selectedQuestion(qid));
    }

    render() {
        const { users, questions, questionsList, type } = this.props;
        if (this.props.isFetched) {
            return <div> Waiting of Users </div>;
        } else {
            if (questionsList.length === 0) { return (<h2> Waiting For Users </h2>) } else {
            return (
                <div>
                    {questionsList.map(function(qid) {
                        return (
                            <div
                                key={qid}
                                className="chat-message clearfix"
                                onClick={this.handleChatDiv.bind(this, qid)}
                            >
                                <div className="chat-message-content clearfix">
                                    <UserChatTime
                                        time={questions[qid].timestamp}
                                    />
                                    <h5 className="user-name">
                                        {users[questions[qid].author].name}
                                    </h5>
                                    <UserInput userText={questions[qid].text} />
                                </div>
                            </div>
                        );
                    }, this)}
                </div>
            );
        }
        }
    }
}

const mapStateToProps = state => ({
    amaId: state.ama.id,
    questionsList: Object.keys(state.questions[state.ama.id]),
    questions: state.questions[state.ama.id],
    users: state.users
});

module.exports = connect(mapStateToProps)(UserViewChat);
