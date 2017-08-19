import React from "react";
import { Link } from 'react-router-dom';

export default class AmaPostAction extends React.Component {
  render() {
    return (
      <div className="col-sm-2">
          <div className="col-sm-12">
            <Link to={`/admin/ama/${this.props.id}/modify`}>Modify</Link>
          </div>
          <div className="col-sm-12">
             <Link to={`/admin/ama/${this.props.id}/registration`}>See Registration(25)</Link>
          </div>
          <div className="col-sm-12">
                <Link to={`/admin/ama/${this.props.id}/unpublish`}>Unpublish</Link>
          </div>
      </div>
    )
  }
}
