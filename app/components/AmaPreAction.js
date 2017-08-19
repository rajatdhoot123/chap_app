import React from "react";
import { Link } from 'react-router-dom';

export default class AmaPreAction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleOnclick = this.handleOnclick.bind(this);
  }
  handleOnclick(e){
 this.props.history.push(`/admin/ama/${this.props.id}/modify`)
   }

  render() {
    return (
      <div className="col-sm-2">
            <div className="col-sm-12">
              <Link
              to={`/admin/ama/${this.props.id}/modify`}
              onClick={this.handleOnClick}>Modify</Link>
            </div>
            <div className="col-sm-12">
               <Link to={`/admin/ama/${this.props.id}/registration`}>See Registration(25)</Link>
            </div>
            <div className="col-sm-12">
                  <a href="#myModal"  data-toggle="modal">Host URL/Audience URL</a>
            </div>
            <div className="col-sm-12">
                  <Link to={`/admin/ama/${this.props.id}/unpublish`}>Unpublish</Link>
            </div>
      </div>
    )
  }
}
