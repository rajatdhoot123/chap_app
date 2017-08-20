import React from "react";
import { UserName } from './Host.js'
import { connect } from 'react-redux';

class ConversationThread extends React.Component {
    render() {
        const { questions ,isFetching ,messages ,users} = this.props;

            if(isFetching){
                return ( <h2> Loading </h2> )
            }
            else{
            return(
            <div>
                <div className="container">
                    <div className = "page-header">
                        <div className="row">
                            <div className="col-sm-12 col-md-12">
                                <h2>Conversation Thread </h2>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="container">
                    <div className="ConversationThread">
                        <div className="row">
                        {Object.keys(questions).map(function (qid){
                        return(
                        <div>
                        <div className="col-sm-12 col-md-12" >
                                <h4><strong><UserName name="Mukul Singh" /></strong></h4>
                                <p>{questions[qid].text} </p>
                                <div className="col-sm-1 col-md-1" >
                                    <button type="button" className="btn btn-link"><strong>UpVote</strong></button>
                                </div>
                                <div className="col-sm-1 col-md-1" >
                                    <button type="button" className="btn btn-link"><strong>Share</strong></button>
                                </div>
                            </div>
                            {Object.keys(messages[qid]).map(function (cid){
                                console.log(users[messages[qid][cid].author].name,"aaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
                            return(
                                <div className="col-sm-10 col-md-10 nested-thread col-md-offset-1" >
                                <div className="thread-text">
                                    <h5><strong>{users[messages[qid][cid].author].name}</strong></h5>
                                    <p>{messages[qid][cid].text}
                                    </p>
                                <div className="row">
                                <div className="col-sm-1 col-md-1" >
                                    <button type="button" className="btn btn-link"><strong>Upvote</strong></button>
                                </div>
                                <div className="col-sm-1 col-md-1" >
                                    <button type="button" className="btn btn-link"><strong>Share</strong></button>
                                </div>
                                <div className="col-sm-1 col-md-1" >
                                    <button type="button" className="btn btn-link"><strong>Delete</strong></button>
                                </div>
                                </div>
                                </div>
                            </div>
                            )
                            })}
                            </div>
                            )
                        })
                        }
                        </div>
                        <br></br>




                        <div className="row">
                            <div className="col-sm-12 col-md-12" >
                                <h4><strong><UserName name="Mukul Singh" /></strong></h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, nulla accusamus magni ve </p>
                                <div className="col-sm-1 col-md-1" >
                                    <button type="button" className="btn btn-link"><strong>UpVote</strong></button>
                                </div>
                                <div className="col-sm-1 col-md-1" >
                                    <button type="button" className="btn btn-link"><strong>Share</strong></button>
                                </div>
                            </div>
                            <div className="col-sm-10 col-md-10 nested-thread col-md-offset-1" >
                            <div className="thread-text">
                                <h5><strong>Sharad Sharma</strong></h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, nulla accusamus magni ve
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, nulla accusamus magni ve
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, nulla accusamus magni ve
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, nulla accusamus magni ve
                                </p>
                                <div className="row">
                                <div className="col-sm-1 col-md-1">
                                    <button type="button" className="btn btn-link"><strong>Upvote</strong></button>
                                </div>
                                <div className="col-sm-1 col-md-1">
                                    <button type="button" className="btn btn-link"><strong>Share</strong></button>
                                </div>
                                <div className="col-sm-1 col-md-1">
                                    <button type="button" className="btn btn-link"><strong>Delete</strong></button>
                                </div>
                                </div>
                                <h5><strong>Sharad Sharma</strong></h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, nulla accusamus magni ve
                                </p>
                                <div className="row">
                                <div className="col-sm-1 col-md-1" >
                                    <button type="button" className="btn btn-link"><strong>Upvote</strong></button>
                                </div>
                                <div className="col-sm-1 col-md-1" >
                                    <button type="button" className="btn btn-link"><strong>Share</strong></button>
                                </div>
                                <div className="col-sm-1 col-md-1" >
                                    <button type="button" className="btn btn-link"><strong>Delete</strong></button>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
}
    }
}



const mapStateToProps = state => ({
    questions : state.questions.ama1,
    isFetching : state.questions.isFetching,
    messages : state.messages,
    users : state.users

});


module.exports = connect(mapStateToProps)(ConversationThread);
