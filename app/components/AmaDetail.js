import React from "react";
import AmaPreAction from "./AmaPreAction";
import AmaPostAction from "./AmaPostAction";

export default class AmaDetail extends React.Component {
    render() {
        return (
            <div className="row">
               <div className="col-sm-2">
                    <div className="col-sm-12">
                        {this.props.sessionName}
                    </div>
               </div>
               <div className="col-sm-2">
                    <div className="col-sm-12">
                        {this.props.date}
                    </div>
               </div>
               <div className="col-sm-2">
                   <div className="col-sm-12">
                      {this.props.numQuestion}
                   </div>
               </div>
               <div className="col-sm-2">
                   <div className="col-sm-12">
                      {this.props.numRegistration}
                   </div>
               </div>
               <div className="col-sm-2">
                           <div className="col-sm-12">
                                {this.props.status}
                           </div>
                </div>
               {this.props.status==="Upcoming"||this.props.status==="Live" ? <AmaPreAction />
                   : <AmaPostAction />
                  }
            </div>
        )
    }
}
