import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import css1 from 'tachyons'
import css from '../css/app.css'

class Home extends React.Component {
  componentDidMount() {
    console.log(this.props, "props");
  }

  render() {
    return (
      <div>
        <Link to="/host">Host View</Link>
        <Link to="/admin">Admin View</Link>
        <Link to="/founder">Founder View</Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(Home);
