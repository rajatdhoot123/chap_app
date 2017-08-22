import React from "react";
import { UserName } from "./Host";
import { connect } from "react-redux";
import { listenALlMsg } from "../reducers/questions";

const HostChatTime = props =>
    <span className="chat-time">
        {props.time}
    </span>;

class UserMessage extends React.Component {
    componentWillMount() {
        this.props.questions === undefined ||
        Object.keys(this.props.questions).length == 0
            ? 0
            : Object.keys(this.props.questions).map(function(elem) {
                  this.props.questions[elem].author === "user2"
                      ? this.props.dispatch(listenALlMsg(elem))
                      : 0;
              }, this);
    }

    render() {
            const {
            messages,
            users,
            questions,
            questionsList,
            selectedQuestion,
            isFetching,
            type,
            activeUser,
            isFirstMessage
        } = this.props;

        console.log(messages[selectedQuestion],"ssssssssssssssssssssssssssssssssssssssss")
        if (messages[selectedQuestion] === undefined || Object.keys(this.props.messages).length == 0) {
            return (<h4> Waiting for messages </h4>)
        } else {
            if (type === "user") {
                var className1 = "bubble";
                var className2 = "bubble2";
            } else {
                var className1 = "bubble2";
                var className2 = "bubble";
            }
            return (
                <div>
                    {Object.keys(messages[selectedQuestion]).map(function(id) {
                        if(messages[selectedQuestion][id].author === "user2"){
                        console.log(users[messages[selectedQuestion][id].author].type,"sddddddddddddddddddddddddddddddd")
                        return (
                            <li key={id}>
                                <div
                                    className={
                                        users[messages[selectedQuestion][id].author].type ===
                                        "host"
                                            ? className1
                                            : className2
                                    }
                                >
                                    <HostChatTime
                                        time={"messages[id].timestamp"}
                                    />
                                    <span className="personName">
                                        <UserName
                                            name={
                                                users[messages[selectedQuestion][id].author].name
                                            }
                                        />
                                    </span>{" "}
                                    <br />
                                    <span className="personSay">
                                        {messages[selectedQuestion][id].text}
                                    </span>
                                </div>
                            </li>
                        );
                        }
                    }, this)}
                </div>
            );
        }
    }
}

const mapStateToProps = state => ({
    questionsList: Object.keys(state.questions[state.ama.id]),
    questions: state.questions[state.ama.id],
    users: state.users,
    selectedQuestion: state.questions.selectedQuestion,
    messages: state.messages,
    isFirstMessage: state.messages.isFirst,
    isFetching: state.questions.isFetching
});

module.exports = connect(mapStateToProps)(UserMessage);
