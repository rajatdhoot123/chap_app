import React from "react";
import { UserName } from "./Host";
import { connect } from "react-redux";
import { listenToMessages } from "../api/api";
import  UserMessage  from "./UserMessage"

const htime = "01:11";
const HostChatTime = props =>
    <span className="chat-time">
        {props.time}
    </span>;

class HostViewChat extends React.Component {
    render() {
        const {
            users,
            questions,
            questionsList,
            selectedQuestion,
            isFetching,
            type,
            activeUser,
            isFirstMessage
        } = this.props;

        let messages;
        if (type === "host") {
            if (isFetching) {
                return <div> Waiting For Users </div>;
            }
            messages = this.props.messages[selectedQuestion];
        /*if (isFirstMessage && type== 'user') {
            if (isFetching) {
            return <div> Write Message </div>;
        }
            return <h2> At User </h2>;
        }*/
        if (messages === undefined || Object.keys(messages).length == 0) {
            /*if (this.props.type === "user") {
                return <h4> Ask Any Question to Host </h4>;
            } else {*/
                return <h4> Waiting for messages </h4>;
            //}
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
                    {Object.keys(messages).map(function(id) {
                        return (
                            <li key={id}>
                                <div
                                    className={
                                        users[messages[id].author].type ===
                                        "host"
                                            ? className1
                                            : className2
                                    }
                                >
                                    <HostChatTime
                                        time={messages[id].timestamp}
                                    />
                                    <span className="personName">
                                        <UserName
                                            name={
                                                users[messages[id].author].name
                                            }
                                        />
                                    </span>{" "}
                                    <br />
                                    <span className="personSay">
                                        {messages[id].text}
                                    </span>
                                </div>
                            </li>
                        );
                    }, this)}
                </div>
            );
        }
    }
    else{
        return(
            <UserMessage />
        )
     if (messages === undefined || Object.keys(messages).length == 0) {
        return (
            <h2> Write Questions to Users </h2>
        )
     }
     else{
        <UserMessage />
/*        console.log(this.props.messages,"PPPPPPPPPPPPPPPPPPPPPPPPPPPPP")
        return (
                <div>
                    {Object.keys(messages).map(function(id) {
                        return (
                            <li key={id}>
                                <div
                                    className={
                                        users[messages[id].author].type ===
                                        "host"
                                            ? className1
                                            : className2
                                    }
                                >
                                    <HostChatTime
                                        time={messages[id].timestamp}
                                    />
                                    <span className="personName">
                                        <UserName
                                            name={
                                                users[messages[id].author].name
                                            }
                                        />
                                    </span>{" "}
                                    <br />
                                    <span className="personSay">
                                        {messages[id].text}
                                    </span>
                                </div>
                            </li>
                        );
                    }, this)}
                </div>
            );
            */
     }

    }
}
}

const mapStateToProps = state => ({
    amaId: state.ama.id,
    questionsList: Object.keys(state.questions[state.ama.id]),
    questions: state.questions[state.ama.id],
    users: state.users,
    selectedQuestion: state.questions.selectedQuestion,
    messages: state.messages,
    isFirstMessage: state.messages.isFirst,
    isFetching: state.questions.isFetching
});

module.exports = connect(mapStateToProps)(HostViewChat);
