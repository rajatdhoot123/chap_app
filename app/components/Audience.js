import React from "react";
import ConversationThread from "./ConversationThread";
import Header from "./Header.js";
import ChatHeader from "./ChatHeader";
import HostChat from "./HostChat";
import User from "./User";
import { store } from "../store";
import { connect } from 'react-redux'
import { fetchQuestion } from '../api/api';
import { listenALlMsg } from '../reducers/questions'

const timeLeft = "09:00";
export const UserName = props => {
    return (
        <div>
            {props.name}
        </div>
    );
};

class Audience extends React.Component {
    componentDidMount(){
        fetchQuestion("user2");
    }
    render() {
        if(this.props.isFetching){
            return <div> Loading </div>
        }
        const { activeUser } = this.props;
        return (
            <div>
                <Header />
                <div className="container chat-main">
                    <ChatHeader time={timeLeft} type={"user"}/>
                    <div className="row">
                        <User type={activeUser}/>
                        <HostChat type={"user"} />
                    </div>
                </div>
                {/*<ConversationThread />*/}
            </div>
        );
    }
}


const mapStateToProps = state => ({
    activeUser : state.users.user2,
    isFetching : state.questions.isFetching,
    questions : state.questions.ama1,
});

module.exports = connect(mapStateToProps)(Audience);
