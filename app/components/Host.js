import React from "react";


const htime = "01:11";
const HostChatTime = (props) => <span className="chat-time">{props.time}</span>


class HostViewChat extends React.Component {
    render() {
        return (
            <div>
                <li>
                    <div className="bubble">
                    <span className="personName">Person name:</span> <br></br>
                    <span className="personSay">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.</span>
                    </div>
                    {/*<span className="time round">12:55 AM <span></span> </span>*/}
                    <HostChatTime time={htime}/>
                </li>
                    <li>
                        <div className="bubble2">
                        <span className="personName2">Person name:</span> <br></br>
                        <span className="personSay2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.</span> </div>
                        {/*<span className=" time2 round ">12:55 PM</span>*/}
                        <HostChatTime time={htime}/>
                    </li>
            </div>
        )
    }
}

class HostChat extends React.Component {
    render() {
        return (
            <div className="col-sm-8 col-md-8 host-chat-col">
                <div className="panel panel-default host-chat">
                    <div className="host-header panel-heading">
                        <p className="host-name host-chat-box-header">Mukul Singh</p>
                        <p className="host-designation host-chat-box-header">Director LetsVenture</p>
                    </div>
                    <div className="panel-body host-chat-panel chat-panel">HOST CHAT PANEL
                        <ul className="chat-ul">
                            <HostViewChat />
                        </ul>
                    </div>
                    <div className="host-footer">
                        <div className="form-group host-footer">
                            <textarea type="text" rows="2" onKeyUp={this.handleKeyPress} placeholder="Enter Your Reply Here" className="form-control host-chat-text-box" id="chat"></textarea>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const ctime = "13:32";
const UserChatTime = (props) => <span className="chat-time">{props.time}</span>


const userTex = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, nulla accusamus magni vel debitis numquam qui tempora rem voluptatem delectus!"
const UserInput = (props) => {
    return (

        <p>{ props.userText }</p>

    )
}


class UserViewChat extends React.Component {
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



class User extends React.Component {
    render() {
        return(
            <div>
                <div className="col-sm-4 col-md-4 user-chat-col">
                    <div className="panel panel-default user-chat">
                        <div className="panel-heading"><strong>Questions to you</strong></div>
                            <div className="panel-body user-chat-panel chat-panel">
                                <UserViewChat />
                            </div>
                            <div className="user-footer">
                                <div className="form-group">
                                  <textarea type="text" rows="2" onKeyUp={this.handleKeyPress} placeholder="Talk to Lets Venture Team" className="form-control user-chat-text-box" id="chat"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}




export default class Host extends React.Component {
  render() {
    return (
        <div>
            <div className="container chat-main">
                <div className="row">
                    <User />
                    <HostChat />
                </div>
            </div>
        </div>
    )
  }
}
