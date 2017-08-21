import React from "react";
import HostViewChat from "./HostViewChat";
import { connect } from "react-redux";
import { addNewText, addNewMessage, addMessage } from "../reducers/messages";
import { newConversationId } from "../reducers/questions";
import { saveNewMessage ,generateQidInUser} from "../api/api";
import { store } from "../store";

export default class HostChat extends React.Component {
    constructor(props) {
        super(props);

        this.handleHostText = this.handleHostText.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleKeyPress(e) {
        const { hostId, selectedQuestion, newMessage, users } = this.props;
        if (e.which == 13 && !e.shiftKey) {
            e.preventDefault();
            //saveNewMessage(selectedQuestion);
            if(this.props.type === "user"){
                if(!users.qid){
                    generateQidInUser("user4");
                };
                /*this.props.dispatch(
                addMessage({
                    qid: users.qid.key,
                    author: e.target.id,
                    text: newMessage.trim(),
                })
            )*/
            }
            /*else{*/
            this.props.dispatch(
                addMessage({
                    qid: selectedQuestion,
                    author: e.target.id,
                    text: newMessage.trim(),
                })
            );
           /* }*/
            //this.props.dispatch(addNewMessage(e.target.value,e.target.id,this.props.selectedQuestion,"message31"))
            //this.props.dispatch(newConversationId(6,this.props.selectedQuestion))
            this.props.dispatch(addNewText(""));
        }
    }

    handleHostText(e) {
        this.props.dispatch(addNewText(e.target.value));
    }

    render() {
        return (
            <div className="col-sm-8 col-md-8 chat-col">
                <div className="panel panel-default host-chat">
                    <div className="panel-heading host-header">
                        <p className="host-name host-chat-box-header">
                            Mukul Singh
                        </p>
                        <p className="host-designation host-chat-box-header">
                            Director LetsVenture
                        </p>
                    </div>
                    <div className="panel-body host-chat-panel chat-panel">
                        <ul className="chat-ul">
                        {(this.props.type === 'user') ? <HostViewChat type = {"user"}/> : <HostViewChat  type = {"host"}/>}
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
                                //id={(this.props.type === "host") ? this.props.hostId : "userId"}
                                id={(this.props.type === "host") ? "user2" : "user4"}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    hostId: state.ama.host,
    selectedQuestion: state.questions.selectedQuestion,
    newMessage: state.messages.newMessage,
    questionFetched : state.messages.isFetching,
    users : state.users.user4
});

/*const mapDispatchToProps = (dispatch) => {
    return {
        updateHostText : (input) => dispatch(updateHostChat(input)),
    }
}

*/

module.exports = connect(mapStateToProps)(HostChat);
