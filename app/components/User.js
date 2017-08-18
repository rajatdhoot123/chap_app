import React from "react"
import UserViewChat from './UserViewChat'
import { connect } from "react-redux";

export default class User extends React.Component {
    constructor(props){
        super(props)

    }

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
                                  <div>
                                    <hr />
                                      <h4 className="text-center">Talk to Lets Venture Team</h4>
                                  </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}


/*const mapStateToProps = (state) => ({
  text : state.updateUserChat.userText
})*/

module.exports = connect()(User);
