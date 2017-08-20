import React from "react";
import ConversationThread from './ConversationThread'
import Header from './Header.js'
import ChatHeader from './ChatHeader'
import HostChat from './HostChat'
import User from './User'
import { store } from '../store'
import { connect } from 'react-redux'

const timeLeft = "09:00"
export const UserName = (props) => { return (<div>{props.name}</div>)}

export default class Host extends React.Component {
  render() {
    return (
        <div>
            <Header />
            <div className="container chat-main">
            <ChatHeader time={timeLeft}/>
                <div className="row">
                    <User type={"host"}/>
                    <HostChat />
                </div>
            </div>
            <ConversationThread />
        </div>
    )
  }
}


const mapStateToProps = state => ({
    user : state.users.author2,
});


module.exports = connect(mapStateToProps)(Host);
