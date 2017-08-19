import React from "react";
import { Link } from 'react-router-dom';

export default class AdminDashboard extends React.Component {
  render() {
    return (
      <div className="row">
          <div>
            <h2>AMA-Admin Dashboard</h2>
          </div>
          <div>
          <Link to={`/admin/ama`}>
              <button
                type="button"
                className="btn btn-primary input-lg pull-right"
                >Create New AMA
              </button>
            </Link>
          </div>
      </div>
    )
  }
}

