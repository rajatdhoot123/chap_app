import React from "react";


const htime = "01:11";
const timeLeft = "09:00"
const HostChatTime = (props) => <span className="chat-time">{props.time}</span>


const ChatTimeLeft = (props) => <span><strong>Time Left :{props.time}</strong></span>


class Header extends React.Component {
    render() {
        return (
            <div className = "page-header">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-10 col-md-10">
                            <a className="navbar-brand brand-white-new hidden-xs hidden-ms" target="_self" href="/"><img alt="LV" src="https://s3-ap-southeast-1.amazonaws.com/letsventure/public/lvlogoblue.png"></img></a>
                        </div>
                        <div className="col-sm-2 col-md-2">
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



const UserName = (props) => { return (<div>{props.name}</div>)}



class HostViewChat extends React.Component {
    render() {
        return (
            <div>
                <li>
                    <div className="bubble">
                    <HostChatTime time={htime}/>
                    <span className="personName"><UserName name="User Anonomus"/></span> <br></br>
                    <span className="personSay">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.</span>
                    </div>
                </li>
                    <li>
                        <div className="bubble2">
                        <HostChatTime time={htime}/>
                        <span className="personName2"><UserName name="Mukul Singh" /></span> <br></br>
                        <span className="personSay2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.</span> </div>
                    </li>
            </div>
        )
    }
}



class HostChat extends React.Component {
    render() {
        return (
            <div className="col-sm-8 col-md-8 chat-col">
                <div className="panel panel-default host-chat">
                    <div className="panel-heading host-header">
                        <p className="host-name host-chat-box-header">Mukul Singh</p>
                        <p className="host-designation host-chat-box-header">Director LetsVenture</p>
                    </div>
                    <div className="panel-body host-chat-panel chat-panel">HOST CHAT PANEL
                        <ul className="chat-ul">
                            <HostViewChat />
                        </ul>
                    </div>
                    <div className="host-footer">
                        <div className="form-group host-chatApp-footer">
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


class ChatHeader extends React.Component {
    render() {
        return (
            <div className = "page-header">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-10 col-md-10">
                            <p className = "notbold"> LetsVenture Ask Me Anything </p>
                            <p><strong>Session Ask Me AnyThing With Mahesh Sharma</strong></p>
                        </div>
                        <div className="col-sm-2 col-md-2">
                            <ChatTimeLeft time={timeLeft}/>
                            <p className="end-ama"><strong>End AMA Now ?</strong></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


class ConversationThread extends React.Component {
    render() {
        return (
            <div>
                <div className = "page-header">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-12">
                                <h2>Conversation Thread </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="ConversationThread">
                        <div className="row">
                            <div className="col-sm-12 col-md-12" >
                                <h4><strong><UserName name="Mukul Singh" /></strong></h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, nulla accusamus magni ve </p>
                                <div className="col-sm-1 col-md-1" >
                                    <button type="button" className="btn btn-link"><strong>UpVote</strong></button>
                                </div>
                                <div className="col-sm-1 col-md-1" >
                                    <button type="button" className="btn btn-link"><strong>Share</strong></button>
                                </div>
                            </div>
                            <div className="col-sm-10 col-md-10 nested-thread col-md-offset-1" >
                            <div className="thread-text">
                                <h5><strong>Sharad Sharma</strong></h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, nulla accusamus magni ve
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, nulla accusamus magni ve
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, nulla accusamus magni ve
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, nulla accusamus magni ve
                                </p>
                                <div className="row">
                                <div className="col-sm-1 col-md-1" >
                                    <button type="button" className="btn btn-link"><strong>Upvote</strong></button>
                                </div>
                                <div className="col-sm-1 col-md-1" >
                                    <button type="button" className="btn btn-link"><strong>Share</strong></button>
                                </div>
                                <div className="col-sm-1 col-md-1" >
                                    <button type="button" className="btn btn-link"><strong>Delete</strong></button>
                                </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        <br></br>
                        <div className="row">
                            <div className="col-sm-12 col-md-12" >
                                <h4><strong><UserName name="Mukul Singh" /></strong></h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, nulla accusamus magni ve </p>
                                <div className="col-sm-1 col-md-1" >
                                    <button type="button" className="btn btn-link"><strong>UpVote</strong></button>
                                </div>
                                <div className="col-sm-1 col-md-1" >
                                    <button type="button" className="btn btn-link"><strong>Share</strong></button>
                                </div>
                            </div>
                            <div className="col-sm-10 col-md-10 nested-thread col-md-offset-1" >
                            <div className="thread-text">
                                <h5><strong>Sharad Sharma</strong></h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, nulla accusamus magni ve
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, nulla accusamus magni ve
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, nulla accusamus magni ve
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, nulla accusamus magni ve
                                </p>
                                <div className="row">
                                <div className="col-sm-1 col-md-1">
                                    <button type="button" className="btn btn-link"><strong>Upvote</strong></button>
                                </div>
                                <div className="col-sm-1 col-md-1">
                                    <button type="button" className="btn btn-link"><strong>Share</strong></button>
                                </div>
                                <div className="col-sm-1 col-md-1">
                                    <button type="button" className="btn btn-link"><strong>Delete</strong></button>
                                </div>
                                </div>
                                <h5><strong>Sharad Sharma</strong></h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, nulla accusamus magni ve
                                </p>
                                <div className="row">
                                <div className="col-sm-1 col-md-1" >
                                    <button type="button" className="btn btn-link"><strong>Upvote</strong></button>
                                </div>
                                <div className="col-sm-1 col-md-1" >
                                    <button type="button" className="btn btn-link"><strong>Share</strong></button>
                                </div>
                                <div className="col-sm-1 col-md-1" >
                                    <button type="button" className="btn btn-link"><strong>Delete</strong></button>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
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
            <div className="col-sm-4 col-md-4 chat-col">
                <div className="panel panel-default user-chat">
                    <div className="panel-heading"><strong>Questions to you</strong></div>
                        <div className="panel-body user-chat-panel chat-panel">
                            <UserViewChat />
                        </div>
                        <div className="user-footer">
                            <div className="form-group host-chatApp-footer">
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
            <Header />
            <div className="container chat-main">
            <ChatHeader time={timeLeft}/>
                <div className="row">
                    <User />
                    <HostChat />
                </div>
            </div>

            <ConversationThread />
        </div>
    )
  }
}
