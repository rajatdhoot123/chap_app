import React from "react";
import { connect } from "react-redux";
import { store } from "../store";

const ctime = "13:32";
const UserChatTime = props =>
    <span className="chat-time">
        {props.time}
    </span>;

const userTex =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, nulla accusamus magni vel debitis numquam qui tempora rem voluptatem delectus!";

const UserInput = props => {
    return (
        <p>
            {props.userText}
        </p>
    );
};

/*questions: {
    12: {
        user: 23,
        text: '',
        timestamp,

    },

    13: {

    },
    order: [12, 13, 14, 16, 19]
}

order.map((id) => {
   return <div>questions[id].na
})


*/

export default class UserViewChat extends React.Component {
    render() {
        const { users, questions, questionsList } = this.props;

        if (this.props.isFetched) {
            console.log(this.props.questionsId);
            return <div> Loading </div>;
        } else {
            return (
                <div>
                    {questionsList.map(function(qid) {
                        console.log(
                            users[questions[qid].author].name,
                            "wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww"
                        );
                        return (
                            <div key={qid} className="chat-message clearfix">
                                <div className="chat-message-content clearfix">
                                    <h2>
                                        {" "}{}{" "}
                                    </h2>
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

                    {/*<div className="chat-message clearfix">
                    <div className="chat-message-content clearfix">
                        <UserChatTime time={ctime}/>
                      <h5 className="user-name">Marco Biedermann</h5>
                      <UserInput userText={userTex}/>
                    </div>
                </div>
                <hr></hr>
                <div className="chat-message clearfix">
                    <div className="chat-message-content clearfix">
                        <UserChatTime time={ctime}/>
                        <h5 className="user-name">Marco Biedermann</h5>
                         <UserInput userText={userTex}/>
                    </div>
                </div>

                <hr></hr>
                <div className="chat-message clearfix">
                    <div className="chat-message-content clearfix">
                        <UserChatTime time={ctime}/>
                        <h5 className="user-name">Marco Biedermann</h5>
                        <UserInput userText={userTex}/>
                    </div>
                </div>*/}
                </div>
            );
        }
    }
}

const mapStateToProps = state => ({
    amaId: state.ama.id,
    questionsList: state.ama.questions,
    questions: state.questions,
    users: state.users
});

module.exports = connect(mapStateToProps)(UserViewChat);
