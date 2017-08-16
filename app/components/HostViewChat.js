import React from "react";
import { UserName } from './Host'
import { connect } from 'react-redux';


const htime = "01:11";
const HostChatTime = (props) => <span className="chat-time">{props.time}</span>


export default class HostViewChat extends React.Component {

    render() {
        const { users, questions, questionsList, selectedQue ,message} = this.props;
        return (
            <div>
            {
                questions[selectedQue].conversation.map(function (cid){
                return(
                    <li key={cid}>
                    <div className="bubble">
                    <HostChatTime time={message[cid].timestamp}/>
                    <span className="personName"><UserName name={users[message[cid].author].name}/></span> <br></br>
                    <span className="personSay">{message[cid].text}</span>
                    </div>
                </li>
                )
                },this)
            }
                {/*<li>
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
                        <span className="personSay2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.</span>
                        </div>
                    </li>*/}
            </div>
        )
    }
}


const mapStateToProps = state => ({
    amaId: state.ama.id,
    questionsList: state.ama.questions,
    questions: state.questions,
    users: state.users,
    selectedQue : state.questions.selectedQuestion,
    message : state.messages
});

module.exports = connect(mapStateToProps)(HostViewChat);
