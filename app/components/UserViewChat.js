import React from 'react'

const ctime = "13:32";
const UserChatTime = (props) => <span className="chat-time">{props.time}</span>

const userTex = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, nulla accusamus magni vel debitis numquam qui tempora rem voluptatem delectus!"
const UserInput = (props) => {
    return (
        <p>{ props.userText }</p>
    )
}

export default class UserViewChat extends React.Component {
    render() {
        return(
            <div>
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
                </div>

                <hr></hr>
                <div className="chat-message clearfix">
                    <div className="chat-message-content clearfix">
                        <UserChatTime time={ctime}/>
                        <h5 className="user-name">Marco Biedermann</h5>
                        <UserInput userText={userTex}/>
                    </div>
                </div>
            </div>
        )
    }
}
