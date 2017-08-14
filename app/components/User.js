import React from "react"

import UserViewChat from './UserViewChat'

export default class User extends React.Component {
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
