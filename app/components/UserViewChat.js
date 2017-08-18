import React from "react";
import { connect } from "react-redux";
import { store } from "../store";
import { selectedQuestion } from '../reducers/questions'

const ctime = "13:32";
const UserChatTime = props =>
    <span className="chat-time">
        {props.time}
    </span>;

const userTex = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, nulla accusamus magni vel debitis numquam qui tempora rem voluptatem delectus!";

const UserInput = props => {
    return (
        <p>
            {props.userText}
        </p>
    );
};

export default class UserViewChat extends React.Component {

    handleChatDiv(qid){
        console.log(qid)
        this.props.dispatch(selectedQuestion(qid))
    }


    render() {
        const { users, questions, questionsList } = this.props;

        if (this.props.isFetched) {
            return <div> Loading </div>;
        } else {
            return (
                <div>
                    {questionsList.map(function(qid) {
                        return (
                            <div key={qid} className="chat-message clearfix" onClick={this.handleChatDiv.bind(this, qid)}>
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

const mapStateToProps = state => ({
    amaId: state.ama.id,
    questionsList: Object.keys(state.questions[state.ama.id]),
    questions: state.questions[state.ama.id],
    users: state.users,
});


module.exports = connect(mapStateToProps)(UserViewChat);
