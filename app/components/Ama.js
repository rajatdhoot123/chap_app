import React from "react";
import Header from "./Header";

export default class Ama extends React.Component {
  render() {
    return (
      <div className="create-ama-component">
        <Header />
        <div>
          <div >
              <h2>Create New Ask Me Anything</h2>
          </div>

          <div >
              <div className="form-group">
                <label>Name of the Session</label>
                <input className="form-control" rows="2" id="comment"></input>
              </div>
          </div>

          <div >
               <div className="form-group">
                  <label>Upload AMA Banner </label>
                  <div className="input-group col-xs-12">
                    <input type="text" className="form-control"  placeholder="Select Image"/>
                    <span className="input-group-btn">
                      <button className="browse btn btn-primary" type="button">CHOOSE</button>
                    </span>
                  </div>
              </div>
          </div>

          <div >
              <div className="form-group">
                <label>Schedule Time to Start</label>
                <input className="form-control" rows="2"/>
              </div>
          </div>

          <div >
              <div className="form-group">
                <label>Duration(in Mins)</label>
                <input className="form-control" rows="2"></input>
              </div>
          </div>
          <hr/>

          <div >
             <h3>ABOUT HOST</h3>
          </div>

          <div>
              <div className="form-group">
                <label>Name of Host </label>
                <input className="form-control" rows="2"/>
              </div>
          </div>

          <div >
               <div className="form-group">
                  <label>Upload Host Image </label>
                  <div className="input-group col-xs-12">
                    <input type="text" className="form-control "  placeholder="Select Image"/>
                    <span className="input-group-btn">
                      <button className="browse btn btn-primary " type="button">CHOOSE</button>
                    </span>
                  </div>
              </div>
          </div>

          <div >
              <div className="form-group">
                <label>Host Profile Link </label>
                <input className="form-control" ></input>
              </div>
          </div>

           <div >
              <div className="form-group">
                <label>Description of AMA
                     <textarea className="form-control" rows="15" cols="80">

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
