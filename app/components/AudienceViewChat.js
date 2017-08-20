import React from "react";
import { connect } from "react-redux";
import { store } from "../store";
import { selectedQuestion } from "../reducers/questions";
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
        const { users, questions, questionsList, type ,activeUser} = this.props;
        setTimeout(function(){console.log(activeUser.name,"aaaaaaaaaaaaaaaaaaaaaaaaaaaa")},8000);

        if (this.props.isFetched) {
            return <div> Loading </div>;
        } else {
            return (
                <div>
                    <div
                        key={"qid"}
                        className="chat-message clearfix"
                    >
                        <div className="chat-message-content clearfix">
                            <h5 className="user-name">
                                {activeUser.name}
                            </h5>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

const mapStateToProps = state => ({
    amaId: state.ama.id,
    questionsList: Object.keys(state.questions[state.ama.id]),
    questions: state.questions[state.ama.id],
    users: state.users,
});

module.exports = connect(mapStateToProps)(UserViewChat);
