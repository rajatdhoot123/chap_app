import React from "react";
import Header from "./Header"

export default class Host extends React.Component {
  render() {
    return(
        <body>
          {/*<div className="page-header">
              <div className="container">
                  <div className="row">
                    <h2 className="text-right">Admin View</h2>
                  </div>
              </div>
          </div>*/}
          <Header />
          <div className="container">
              <div className="row">
                  <h2>AMA-Admin Dashboard</h2>
                  <h2></h2>
              </div>
              <div className="row">
                  <h2>Live & Upcoming AMAs</h2>
              </div>
              <div className="row">
                 <div className="col-sm-2"><h4>Session Name</h4></div>
                 <div className="col-sm-2"><h4>Date of AMA</h4></div>
                 <div className="col-sm-2"><h4>Questions</h4></div>
                 <div className="col-sm-2"><h4>Registrations</h4></div>
                 <div className="col-sm-2"><h4>Status</h4></div>
                 <div className="col-sm-2"><h4>Actions</h4></div>
              </div>
              <div className="row">
                 <hr/>
                 <div className="col-sm-2">
                     <div className="col-sm-12">
                          AMA with Sharad Sharma
                      </div>
                 </div>
                 <div className="col-sm-2">
                     <div className="col-sm-12">
                          10am,16th Aug
                      </div>
                 </div>
                 <div className="col-sm-2">
                     <div className="col-sm-12">
                          20
                      </div>
                 </div>
                 <div className="col-sm-2">
                     <div className="col-sm-12">
                          100
                      </div>
                 </div>
                 <div className="col-sm-2">
                     <div className="col-sm-12">
                          Upcoming
                      </div>
                 </div>
                 <div className="col-sm-2">
                     <div className="col-sm-12">
                         <a href="modify.html">Modify</a>
                      </div>
                      <div className="col-sm-12">
                          <a href="registration.html">See Registration(25)</a>
                      </div>
                      <div className="col-sm-12">
                          <a href="#myModal"  data-toggle="modal">Host URL/Audience URL</a>
                      </div>
                      <div className="col-sm-12">
                          <a href="unPublish.html">Unpublish</a>
                      </div>
                 </div>
              </div>
                <div className="row">
                 <hr/>
                 <div className="col-sm-2">
                     <div className="col-sm-12">
                          AMA with Jay Ahya
                      </div>
                 </div>
                 <div className="col-sm-2">
                     <div className="col-sm-12">
                          10am,12th Aug
                      </div>
                 </div>
                 <div className="col-sm-2">
                     <div className="col-sm-12">
                          12
                      </div>
                 </div>
                 <div className="col-sm-2">
                     <div className="col-sm-12">
                          120
                      </div>
                 </div>
                 <div className="col-sm-2">
                     <div className="col-sm-12">
                          Live
                      </div>
                 </div>
                 <div className="col-sm-2">
                     <div className="col-sm-12">
                         <a href="modify.html">Modify</a>
                      </div>
                      <div className="col-sm-12">
                          <a href="registration.html">See Registration(200)</a>
                      </div>
                      <div className="col-sm-12">
                          <a href="#myModal"  data-toggle="modal">Host URL/Audience URL</a>
                      </div>
                      <div className="col-sm-12">
                          <a href="unPublish.html">Unpublish</a>
                      </div>
                 </div>
              </div>
              <div className="row">
                  <h2>Past AMAs</h2>
              </div>
               <div className="row">
                 <div className="col-sm-2"><h4>Session Name</h4></div>
                 <div className="col-sm-2"><h4>Date of AMA</h4></div>
                 <div className="col-sm-2"><h4>Questions</h4></div>
                 <div className="col-sm-2"><h4>Registrations</h4></div>
                 <div className="col-sm-2"><h4>Status</h4></div>
                 <div className="col-sm-2"><h4>Actions</h4></div>
              </div>
              <div className="row">
                 <hr/>
                 <div className="col-sm-2">
                     <div className="col-sm-12">
                          AMA with Sanjay Jha
                      </div>
                 </div>
                 <div className="col-sm-2">
                     <div className="col-sm-12">
                          12noon,12th July
                      </div>
                 </div>
                 <div className="col-sm-2">
                     <div className="col-sm-12">
                          12
                      </div>
                 </div>
                 <div className="col-sm-2">
                     <div className="col-sm-12">
                          80
                      </div>
                 </div>
                 <div className="col-sm-2">
                     <div className="col-sm-12">
                          Completed
                      </div>
                 </div>
                 <div className="col-sm-2">
                     <div className="col-sm-12">
                         <a href="modify.html">Modify</a>
                      </div>
                      <div className="col-sm-12">
                          <a href="registration.html">See Registration(120)</a>
                      </div>
                      <div className="col-sm-12">
                          <a href="unPublish.html">Unpublish</a>
                      </div>
                 </div>
              </div>
                 <div className="row">
                 <hr/>
                 <div className="col-sm-2">
                     <div className="col-sm-12">
                          AMA with Sanjay Jha
                      </div>
                 </div>
                 <div className="col-sm-2">
                     <div className="col-sm-12">
                          12noon,12th July
                      </div>
                 </div>
                 <div className="col-sm-2">
                     <div className="col-sm-12">
                          12
                      </div>
                 </div>
                 <div className="col-sm-2">
                     <div className="col-sm-12">
                          80
                      </div>
                 </div>
                 <div className="col-sm-2">
                     <div className="col-sm-12">
                          Completed
                      </div>
                 </div>
                 <div className="col-sm-2">
                     <div className="col-sm-12">
                         <a href="modify.html">Modify</a>
                      </div>
                      <div className="col-sm-12">
                          <a href="registration.html">See Registration(1200)</a>
                      </div>
                      <div className="col-sm-12">
                          <a href="unPublish.html">Unpublish</a>
                      </div>
                 </div>
              </div>
               <div className="row">
                 <hr/>
                 <div className="col-sm-2">
                     <div className="col-sm-12">
                          AMA with Sanjay Jha
                      </div>
                 </div>
                 <div className="col-sm-2">
                     <div className="col-sm-12">
                          12noon,12th July
                      </div>
                 </div>
                 <div className="col-sm-2">
                     <div className="col-sm-12">
                          12
                      </div>
                 </div>
                 <div className="col-sm-2">
                     <div className="col-sm-12">
                          80
                      </div>
                 </div>
                 <div className="col-sm-2">
                     <div className="col-sm-12">
                          Completed
                      </div>
                 </div>
                 <div className="col-sm-2">
                     <div className="col-sm-12">
                         <a href="modify.html">Modify</a>
                      </div>
                      <div className="col-sm-12">
                          <a href="registration.html">See Registration(123)</a>
                      </div>
                      <div className="col-sm-12">
                          <a href="unPublish.html">Unpublish</a>
                      </div>
                 </div>
              </div>
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
                                      tye="text"
                                      value="www.letsventure.com/ama12/audience/asd12312"
                                  />
                              </div>
                              <div className="col-sm-2">
                                  <button
                                      className="btn"
                                      id="audienceUrlInputCopy"
                                      tye="button"
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
                                      tye="text"
                                      value="www.letsventure.com/ama12/audience/asd12312"
                                  />
                              </div>
                              <div className="col-sm-2">
                                  <button
                                      className="btn"
                                      id="hostUrlInputCopy"
                                      tye="button"
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
      </body>
    )
  }
}
