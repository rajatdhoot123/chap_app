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
          <div id="myModal" className="modal fade">
              <div className="modal-dialog">
                  <div className="modal-content">
                      <div className="modal-header">
                          <h2>Share AMA</h2>
                      </div>
                      <div className="modal-body">
                          <div className="modalrow">
                              <h4>Audience URL</h4>
                          </div>
                          <div className="modalrow">
                              <div className="col-sm-10">
                                  <input
                                      className="form-control"
                                      id="audienceUrlInput"
                                      type="text"
                                      value="www.letsventure.com/ama12/audience/asd12312"
                                  />
                              </div>
                              <div className="col-sm-2">
                                  <button
                                      className="btn"
                                      id="audienceUrlInputCopy"
                                      type="button"
                                      value="www.letsventure.com/ama12/audience/asd12312">
                                      copy
                                  </button>
                              </div>
                          </div>
                          <div className="modalrow">
                              <h4>Host URL</h4>
                          </div>
                          <div className="row">
                              <div className="col-sm-10">
                                  <input
                                      className="form-control"
                                      id="hostUrlInput"
                                      type="text"
                                      value="www.letsventure.com/ama12/audience/asd12312"
                                  />
                              </div>
                              <div className="col-sm-2">
                                  <button
                                      className="btn"
                                      id="hostUrlInputCopy"
                                      type="button"
                                      value="www.letsventure.com/ama12/host/asd12312">
                                      copy
                                  </button>
                              </div>
                          </div>
                      </div>
                      <div className="modal-footer">
                          <button type="button" data-dismiss="modal" className="btn btn-primary text-right">
                               Done
                          </button>
                      </div>
                 </div>
              </div>
          </div>
          <footer>
              <address></address>
         </footer>
      </div>
    )
  }
}
