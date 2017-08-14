import React from "react";
import { UserName } from './Host'


const htime = "01:11";
const HostChatTime = (props) => <span className="chat-time">{props.time}</span>

export default class HostViewChat extends React.Component {
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
