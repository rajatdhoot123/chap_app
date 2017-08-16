import React from 'react'
import { connect } from "react-redux";
import { store } from '../store'

const ctime = "13:32";
const UserChatTime = (props) => <span className="chat-time">{props.time}</span>

const userTex = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, nulla accusamus magni vel debitis numquam qui tempora rem voluptatem delectus!"

const UserInput = (props) => {
    return (
        <p>{ props.userText }</p>
    )
}

/*questions: {
    12: {
        user: 23,
        text: '',
        timestamp,

    },

    13: {

    },
    order: [12, 13, 14, 16, 19]
}

order.map((id) => {
   return <div>questions[id].na
})


*/



export default class UserViewChat extends React.Component {

    render() {
/*        const {users, questions} = this.props
        users[questions[id].author].name*/
        if(!this.props.isFetched){
            console.log(this.props,"aaaaaaaaaaaaaaaaaaaaa")
            return <div> Loading </div>
        }
        else {
            console.log(this.props,"aaaaaaaaaaaaaaaaaaaaa")
        return(
            <div>
                {
                    this.props.questions.order.map(function (elem,index){
                        return (
                            <div key={index} className="chat-message clearfix">
                                <div className="chat-message-content clearfix">
                                users[this.props.questions[elem].author].name
                                    <UserChatTime time={this.props.questions.questions[elem].timeStamp}/>
                                    <h5 className="user-name">{this.props.questions.questions[elem].author}</h5>
                                    <UserInput userText={this.props.questions.questions[elem].text}/>
                                </div>
                            </div>

                        )
                    },this)
                }

                {/*<div className="chat-message clearfix">
                    <div className="chat-message-content clearfix">
                        <UserChatTime time={ctime}/>
                      <h5 className="user-name">Marco Biedermann</h5>
                      <UserInput userText={userTex}/>
                    </div>
                </div>
                <hr></hr>
                <div className="chat-message clearfix">
                    <div className="chat-message-content clearfix">
                        <UserChatTime time={ctime}/>
                        <h5 className="user-name">Marco Biedermann</h5>
                         <UserInput userText={userTex}/>
                    </div>
                </div>

                <hr></hr>
                <div className="chat-message clearfix">
                    <div className="chat-message-content clearfix">
                        <UserChatTime time={ctime}/>
                        <h5 className="user-name">Marco Biedermann</h5>
                        <UserInput userText={userTex}/>
                    </div>
                </div>*/}
            </div>
        )
    }
}
}



const mapStateToProps = (state) => ({
  isFetched : state,
  questions : state
})


module.exports = connect(mapStateToProps)(UserViewChat);
