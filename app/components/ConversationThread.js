import React from "react";
import { UserName } from './Host.js'

export default class ConversationThread extends React.Component {
    render() {
        return (
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
