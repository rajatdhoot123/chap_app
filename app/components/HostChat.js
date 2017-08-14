import React from "react"
import  HostViewChat  from './HostViewChat'



export default class HostChat extends React.Component {
    render() {
        return (
            <div className="col-sm-8 col-md-8 chat-col">
                <div className="panel panel-default host-chat">
                    <div className="panel-heading host-header">
                        <p className="host-name host-chat-box-header">Mukul Singh</p>
                        <p className="host-designation host-chat-box-header">Director LetsVenture</p>
                    </div>
                    <div className="panel-body host-chat-panel chat-panel">
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
