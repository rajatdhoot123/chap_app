import React from "react";

export default class HeaderAma extends React.Component {
    render() {
        return (
            <div className="row">
                 <div className="col-sm-2"><h4>Session Name</h4></div>
                 <div className="col-sm-2"><h4>Date of AMA</h4></div>
                 <div className="col-sm-2"><h4>Questions</h4></div>
                 <div className="col-sm-2"><h4>Registrations</h4></div>
                 <div className="col-sm-2"><h4>Status</h4></div>
                 <div className="col-sm-2"><h4>Actions</h4></div>
            </div>
        )
    }
}
