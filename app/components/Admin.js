import { connect } from "react-redux";
import React from "react";

import Header from "./Header";
import HeaderAma from "./HeaderAma";
import AmaDetail from "./AmaDetail";
import AdminDashboard from "./AdminDashboard"

export default class Host extends React.Component {
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
              <AmaDetail
                status="Live"
                sessionName="AMA with Sharad Sharma "
                data="10am,16th Aug"
                numQuestion="20"
                numRegistration="100"/>
               <hr/>
              <AmaDetail
                status="Upcoming"
                sessionName="AMA with Jay Ahya "
                data="10am,16th Aug"
                numQuestion="20"
                numRegistration="100"/>
                <hr/>
              <div className="row">
                  <h2>Past AMAs</h2>
              </div>
              <HeaderAma />
              <hr/>
              <AmaDetail
                status="completed"
                sessionName="AMA with Sanjay Jha "
                data="10am,16th July"
                numQuestion="120"
                numRegistration="1000"/>
              <hr/>
              <AmaDetail
                status="completed"
                sessionName="AMA with Sanjay Jha"
                data="10am,16th Aug"
                numQuestion="20"
                numRegistration="100"/>
              <hr/>
          </div>
      </div>
    )
  }
}
 connect()(Host);
