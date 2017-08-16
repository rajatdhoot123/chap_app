import React from "react";

export default class AmaPreAction extends React.Component {
    render() {
        return (
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
        )
    }
}
