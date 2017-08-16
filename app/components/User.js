import React from "react"
import UserViewChat from './UserViewChat'
import { connect } from "react-redux";

export default class User extends React.Component {
    constructor(props){
        super(props)

     this.handleUserTextarea = this.handleUserTextarea.bind(this);
     this.handleEnter = this.handleEnter.bind(this)
    }



    handleUserTextarea(e){
        this.props.updateUserText(e.target.value)
    }

    handleEnter(e){
        if(e.which == 13 && !e.shiftKey){
            //console.log(this.props.text)
        }
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
                                  <textarea
                                  onChange={this.handleUserTextarea}

                                  type="text"
                                  rows="2"
                                  onKeyPress={this.handleEnter}
                                  placeholder="Talk to Lets Venture Team"
                                  className="form-control user-chat-text-box"
                                  id="chat" />
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

/*const mapDispatchToProps = (dispatch) => {
    return {
        updateUserText : (input) => dispatch(updateUserChat(input)),
    }
}*/

module.exports = connect()(User);
