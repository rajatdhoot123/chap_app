import React from "react";
import Header from "./Header";
import { connect } from "react-redux";

class Ama extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        id:'',
        sessionName:'',
        date:'',
        status:'',
        title:'',
        hostName:'',
        hostImage:'',
        hostLink:'',
        description:"",
    };

  }
  componentDidMount() {
    var path=this.props.match.path;
    var id=this.props.match.params.id;
    const modifyAmaPath="/admin/ama/:id/modify"
    if(!path==modifyAmaPath){
      this.setState({
        id:'',
        sessionName:'',
        date:'',
        status:'',
        time:'',
        title:'Create New Ask Me Anything',
      })
    }else if(path==modifyAmaPath){
       this.setState({
          id:this.props.id,
          sessionName:`AMA WITH ${this.props.ama[id].name}`,
          date:this.props.ama[id].date,
          banner:'choose',
          status:this.props.ama[id].status,
          time:this.props.ama[id].time,
          hostName:'LetsVenture',
          hostImage:'LetsVentureLogo',
          hostLink:'LetsVenture link',
          description:"Some details about the session",
      })
      }
    }
  render() {
    return (
      <div className="create-ama-component">
        <Header />
        <div>
          <div >
              <h2>{this.state.title}</h2>
          </div>

          <div >
              <div className="form-group">
                <label>Name of the Session</label>
                <input
                  className="form-control"
                  rows="2"
                  value={this.state.sessionName}
                  >
                </input>
              </div>
          </div>

          <div >
               <div className="form-group">
                  <label>Upload AMA Banner </label>
                  <div className="input-group col-xs-12">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Select Image"/>
                    <span className="input-group-btn">
                      <button className="browse btn btn-primary" type="button">CHOOSE</button>
                    </span>
                  </div>
              </div>
          </div>

          <div >
              <div className="form-group">
                <label>Schedule Time to Start</label>
                <input
                  className="form-control"
                  rows="2"
                  value={this.state.date}>
                </input>
              </div>
          </div>

          <div >
              <div className="form-group">
                <label>Duration(in Mins)</label>
                <input
                    className="form-control"
                    rows="2"
                    value={this.state.time}>
                </input>
              </div>
          </div>
          <hr/>

          <div >
             <h3>ABOUT HOST</h3>
          </div>

          <div>
              <div className="form-group">
                <label>Name of Host </label>
                <input
                className="form-control"
                rows="2"
                value={this.state.hostName}/>
              </div>
          </div>

          <div >
               <div className="form-group">
                  <label>Upload Host Image </label>
                  <div className="input-group col-xs-12">
                    <input
                    type="text"
                    className="form-control"
                    placeholder="Select Image"
                    value={this.state.hostImage}/>
                    <span className="input-group-btn">
                      <button className="browse btn btn-primary" type="button">CHOOSE</button>
                    </span>
                  </div>
              </div>
          </div>

          <div >
              <div className="form-group">
                <label>Host Profile Link </label>
                <input
                className="form-control"
                value={this.state.hostLink}></input>
              </div>
          </div>

           <div >
              <div className="form-group">
                <label>Description of AMA
                     <textarea className="form-control" rows="15" cols="80">
                        {this.state.description}
                     </textarea>
                </label>
              </div>
          </div>

          <div >
             <button type="button" value="publish" className="browse btn btn-primary">
                  Publish
              </button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return state
};
export default connect(mapStateToProps)(Ama);
