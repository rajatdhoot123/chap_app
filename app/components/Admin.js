import { connect } from "react-redux";
import React from "react";

import Header from "./Header";
import HeaderAma from "./HeaderAma";
import AmaDetail from "./AmaDetail";
import AdminDashboard from "./AdminDashboard"

class Host extends React.Component {
  render() {
    return(
        <div>
          <Header />
          <div className="container">
              <AdminDashboard />
              <div className="row">
                  <h2>Live & Upcoming AMAs</h2>
              </div>
              <HeaderAma/>
              <hr/>
               {this.props.ama.allAMA.map((id)=> {
                 {if(this.props.ama[id].status==="Upcoming"||this.props.ama[id].status==="Live"){
                  return(
                        <div>
                        <AmaDetail
                        status={this.props.ama[id].status}
                        sessionName={this.props.ama[id].name}
                        date={this.props.ama[id].date}
                        id={id}
                        numQuestion={this.props.ama[id].questions}
                        numRegistration={this.props.ama[id].registrations}/>
                        <hr></hr>
                        </div>
                        )
                  }}
                })}
              <div className="row">
                  <h2>Past AMAs</h2>
              </div>
              <HeaderAma />
              <hr></hr>
               {this.props.ama.allAMA.map((id)=> {
                 {if(this.props.ama[id].status==="Completed"){
                  return(
                    <div>
                    <AmaDetail
                        status={this.props.ama[id].status}
                        sessionName={this.props.ama[id].name}
                        date={this.props.ama[id].date}
                        numQuestion={this.props.ama[id].questions}
                        numRegistration={this.props.ama[id].registrations}/>
                        <hr/>
                        </div>
                        )
                  }}
                })}
                <hr/>
          </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return state
};
export default connect(mapStateToProps)(Host);
