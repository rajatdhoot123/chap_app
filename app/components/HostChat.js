import React from "react"
import  HostViewChat  from './HostViewChat'
import { connect } from "react-redux";
import { updateHostChat } from '../actions/actions'


export default class HostChat extends React.Component {
    constructor(props){
        super(props)

        this.handleHostText = this.handleHostText.bind(this)
        this.handleKeyPress = this.handleKeyPress.bind(this)
    }

    handleKeyPress(e){
        if(e.which == 13 && !e.shiftKey){

        }
    }

    handleHostText(e){
        /*this.props.updateHostText(e.target.value)*/
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
                            placeholder="Enter Your Reply Here"
                            className="form-control host-chat-text-box"
                            id="chat">
                            </textarea>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


/*const mapStateToProps = (state) => ({
    text : state.updateHostChat.hostText
})
*/
/*const mapDispatchToProps = (dispatch) => {
    return {
        updateHostText : (input) => dispatch(updateHostChat(input)),
    }
}

*/

module.exports = connect()(HostChat);
