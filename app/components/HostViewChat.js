import React from "react";
import { UserName } from './Host'
import { connect } from 'react-redux';
import { listenToMessages } from '../api/api'


const htime = "01:11";
const HostChatTime = (props) => <span className="chat-time">{props.time}</span>


export default class HostViewChat extends React.Component {

    componentDidMount(){
        listenToMessages();
    }

    render() {
        const { users, questions, questionsList, selectedQuestion ,isFetching} = this.props;
        const messages = this.props.messages[selectedQuestion];
        if (isFetching) {
        return (<div> Loading </div>)
    }
        else{
        return (
            <div>
            {
                Object.keys(messages).map(function (id){
                return(
                    <li key={id}>
                    <div className="bubble">
                    <HostChatTime time={messages[id].timestamp}/>
                    <span className="personName"><UserName name={messages[id].author}/></span> <br></br>
                    <span className="personSay">{messages[id].text}</span>
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
}


const mapStateToProps = state => ({
    amaId: state.ama.id,
    questionsList: Object.keys(state.questions[state.ama.id]),
    questions: state.questions[state.ama.id],
    users: state.users,
    selectedQuestion : state.questions.selectedQuestion,
    messages : state.messages,
    isFetching : state.messages.isFetching
});

module.exports = connect(mapStateToProps)(HostViewChat);
