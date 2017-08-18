import React from "react"
import  HostViewChat  from './HostViewChat'
import { connect } from "react-redux";
import { addNewText ,addNewMessage } from '../reducers/messages'
import { newConversationId } from '../reducers/questions'

export default class HostChat extends React.Component {
    constructor(props){
        super(props)

        this.handleHostText = this.handleHostText.bind(this)
        this.handleKeyPress = this.handleKeyPress.bind(this)
    }

    handleKeyPress(e){
        if(e.which == 13 && !e.shiftKey){
            e.preventDefault()
            this.props.dispatch(addNewMessage(e.target.value,e.target.id,this.props.selectedQuestion,"message31"))
            //this.props.dispatch(newConversationId(6,this.props.selectedQuestion))
            this.props.dispatch(addNewText(''))
        }
    }

    handleHostText(e){
        this.props.dispatch(addNewText(e.target.value))
    }

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
                            <textarea
                            type="text"
                            rows="2"
                            onChange={this.handleHostText}
                            onKeyUp={this.handleKeyPress}
                            value={this.props.newMessage}
                            placeholder="Enter Your Reply Here"
                            className="form-control host-chat-text-box"
                            id={this.props.hostId}>
                            </textarea>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    hostId : state.ama.host,
    selectedQuestion : state.questions.selectedQuestion,
    newMessage: state.messages.newMessage
})

/*const mapDispatchToProps = (dispatch) => {
    return {
        updateHostText : (input) => dispatch(updateHostChat(input)),
    }
}

*/

module.exports = connect(mapStateToProps)(HostChat);
