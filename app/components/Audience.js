import React from "react";
import ConversationThread from "./ConversationThread";
import Header from "./Header.js";
import ChatHeader from "./ChatHeader";
import HostChat from "./HostChat";
import User from "./User";
import { store } from "../store";
import { connect } from 'react-redux'

const timeLeft = "09:00";
export const UserName = props => {
    return (
        <div>
            {props.name}
        </div>
    );
};

class Audience extends React.Component {
    render() {
        if(this.props.isFetching){
            return <div> Loading </div>
        }
        const { activeUser } = this.props;
        return (
            <div>
                <Header />
                <div className="container chat-main">
                    <ChatHeader time={timeLeft} />
                    <div className="row">
                        <User type={activeUser}/>
                        <HostChat />
                    </div>
                </div>
                <ConversationThread />
            </div>
        );
    }
}


const mapStateToProps = state => ({
    activeUser : state.users.user3,
    isFetching : state.messages.isFetching,
});

module.exports = connect(mapStateToProps)(Audience);
