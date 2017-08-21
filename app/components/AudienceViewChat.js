import React from "react";
import { connect } from "react-redux";
import { store } from "../store";
import { selectedQuestion } from "../reducers/questions";
import { refQue } from "../config";
import { Router } from "react-router";

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
        if (this.props.isFetched) {
            return <div> Loading </div>;
        } else {
            return (
                <div>
                    <div
                        key={"qid"}
                        className="chat-message clearfix"
                    >
                        <div className="row">
                        <div className="chat-message-content clearfix">
                            <div className="col-md-4 col-sm-4" >
                            <div id="avatar" />
                            </div>
                            <div className="col-md-8 col-sm-8" >
                            <h4 className="user-name">
                                {activeUser.name}
                            </h4>
                            Ask Your Question Here
                            </div>
                        </div>
                        <hr />
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
