import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Header from "./Header.js";
import css1 from "tachyons";
import css from "../css/app.css";

class Home extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      loading: true,
      id: 2
    };
    this.toggleId=this.toggleId.bind(this);
  }

  toggleId(event){
    var id=parseInt(event.target.id);
    this.setState({
      id:event.target.id
    })

  }

  componentDidMount() {
    console.log(this.props, "props-------");
    this.setState({
          loading: false
        })
  }

  render() {
    if (this.state.loading) {
      return <h1>loading......</h1>;
    } else {
      console.log("this.props.ama.2.name",this.props.ama[2].name)
      console.log("after state: ",this.state.id)
    return (
      <div>
      <div className="nav">
          <Link to="/host">Host View</Link>
          <Link to="/admin">Admin View</Link>
          <Link to="/founder">Founder View</Link>
        </div>
        <Header />


        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-6">
              <p className="notbold1"> LetsVenture Ask Me Anything </p>
              <p>
                One liner for the LetsVenture Ask me Anything feature. Basically
                its setting the context about what is this all about
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12 col-md-12">
              <div className="center">
                <img
                  className="cover"
                  alt="100%x180"
                  data-src="holder.js/100%x180"
                  src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMzE5IiBoZWlnaHQ9IjE4MCIgdmlld0JveD0iMCAwIDMxOSAxODAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPjwhLS0KU291cmNlIFVSTDogaG9sZGVyLmpzLzEwMCV4MTgwCkNyZWF0ZWQgd2l0aCBIb2xkZXIuanMgMi42LjAuCkxlYXJuIG1vcmUgYXQgaHR0cDovL2hvbGRlcmpzLmNvbQooYykgMjAxMi0yMDE1IEl2YW4gTWFsb3BpbnNreSAtIGh0dHA6Ly9pbXNreS5jbwotLT48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwhW0NEQVRBWyNob2xkZXJfMTVkZTRjYzhlOGIgdGV4dCB7IGZpbGw6I0FBQUFBQTtmb250LXdlaWdodDpib2xkO2ZvbnQtZmFtaWx5OkFyaWFsLCBIZWx2ZXRpY2EsIE9wZW4gU2Fucywgc2Fucy1zZXJpZiwgbW9ub3NwYWNlO2ZvbnQtc2l6ZToxNnB0IH0gXV0+PC9zdHlsZT48L2RlZnM+PGcgaWQ9ImhvbGRlcl8xNWRlNGNjOGU4YiI+PHJlY3Qgd2lkdGg9IjMxOSIgaGVpZ2h0PSIxODAiIGZpbGw9IiNFRUVFRUUiLz48Zz48dGV4dCB4PSIxMTcuNDIxODc1IiB5PSI5Ny4yIj4zMTl4MTgwPC90ZXh0PjwvZz48L2c+PC9zdmc+"
                  data-holder-rendered="true"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-5 col-md-5">
              <div className="center">
                <img
                  className="thumbnail"
                  alt="100%x180"
                  data-src="holder.js/100%x180"
                  src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMzE5IiBoZWlnaHQ9IjE4MCIgdmlld0JveD0iMCAwIDMxOSAxODAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPjwhLS0KU291cmNlIFVSTDogaG9sZGVyLmpzLzEwMCV4MTgwCkNyZWF0ZWQgd2l0aCBIb2xkZXIuanMgMi42LjAuCkxlYXJuIG1vcmUgYXQgaHR0cDovL2hvbGRlcmpzLmNvbQooYykgMjAxMi0yMDE1IEl2YW4gTWFsb3BpbnNreSAtIGh0dHA6Ly9pbXNreS5jbwotLT48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwhW0NEQVRBWyNob2xkZXJfMTVkZTRjYzhlOGIgdGV4dCB7IGZpbGw6I0FBQUFBQTtmb250LXdlaWdodDpib2xkO2ZvbnQtZmFtaWx5OkFyaWFsLCBIZWx2ZXRpY2EsIE9wZW4gU2Fucywgc2Fucy1zZXJpZiwgbW9ub3NwYWNlO2ZvbnQtc2l6ZToxNnB0IH0gXV0+PC9zdHlsZT48L2RlZnM+PGcgaWQ9ImhvbGRlcl8xNWRlNGNjOGU4YiI+PHJlY3Qgd2lkdGg9IjMxOSIgaGVpZ2h0PSIxODAiIGZpbGw9IiNFRUVFRUUiLz48Zz48dGV4dCB4PSIxMTcuNDIxODc1IiB5PSI5Ny4yIj4zMTl4MTgwPC90ZXh0PjwvZz48L2c+PC9zdmc+"
                  data-holder-rendered="true"
                />
              </div>
            </div>
            <div className="col-sm-7 col-md-7">
              <div className="center">
                <img
                  className="thumbnail"
                  alt="100%x180"
                  data-src="holder.js/100%x180"
                  src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMzE5IiBoZWlnaHQ9IjE4MCIgdmlld0JveD0iMCAwIDMxOSAxODAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPjwhLS0KU291cmNlIFVSTDogaG9sZGVyLmpzLzEwMCV4MTgwCkNyZWF0ZWQgd2l0aCBIb2xkZXIuanMgMi42LjAuCkxlYXJuIG1vcmUgYXQgaHR0cDovL2hvbGRlcmpzLmNvbQooYykgMjAxMi0yMDE1IEl2YW4gTWFsb3BpbnNreSAtIGh0dHA6Ly9pbXNreS5jbwotLT48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwhW0NEQVRBWyNob2xkZXJfMTVkZTRjYzhlOGIgdGV4dCB7IGZpbGw6I0FBQUFBQTtmb250LXdlaWdodDpib2xkO2ZvbnQtZmFtaWx5OkFyaWFsLCBIZWx2ZXRpY2EsIE9wZW4gU2Fucywgc2Fucy1zZXJpZiwgbW9ub3NwYWNlO2ZvbnQtc2l6ZToxNnB0IH0gXV0+PC9zdHlsZT48L2RlZnM+PGcgaWQ9ImhvbGRlcl8xNWRlNGNjOGU4YiI+PHJlY3Qgd2lkdGg9IjMxOSIgaGVpZ2h0PSIxODAiIGZpbGw9IiNFRUVFRUUiLz48Zz48dGV4dCB4PSIxMTcuNDIxODc1IiB5PSI5Ny4yIj4zMTl4MTgwPC90ZXh0PjwvZz48L2c+PC9zdmc+"
                  data-holder-rendered="true"
                />
              </div>
            </div>
            <div className="body-header">
              <p className="notbold1 new"> Upcoming AMA </p>
            </div>

            <div className="box col-md-12 col-sm-12">
              <div className="col-md-2 col-sm-2">

                <img className="circle img-circle" src={this.props.ama[this.state.id].url} alt="Cinque Terre"/>
              </div>
              <div className="col-md-8 col-sm-8">
                <h3> AMA with  {this.props.ama[this.state.id].name}</h3>
                <p>{this.props.ama[this.state.id].day}, {this.props.ama[this.state.id].time}</p>
                <p>Moderated By: LetsVenture Team</p>
              </div>
              <div className="col-md-1 col-sm-1 right">
                <button className="btn btn-default" role="button">
                  Remind Me
                </button>
              </div>
              <div className="col-md-12 col-sm-12">
                <hr />
                <div className="col-md-8 col-sm-8 ">
                  <p>{this.props.ama[this.state.id].description}
                  </p>
                  <p>You can ask questions around:</p>
                  <p>1. Making things happen with Music</p>
                  <p>2. How to make investments and see them through</p>
                  <a href="https://letsventure.com/">
                    View {this.props.ama[this.state.id].name}'s Portfolio on LetsVenture
                  </a>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-6  ">
              <div className=" center">
                <img
                  className="thumbnail"
                  id="2"
                  alt="100%x180"
                  data-src="holder.js/100%x180"
                  src={this.props.ama[2].url}
                  data-holder-rendered="true"
                  onClick={this.toggleId}
                />
              </div>
            </div>

            <div className="col-sm-6 col-md-6  ">
              <div className="center">
                <img
                  className="thumbnail"
                  id="3"
                  alt="100%x180"
                  data-src="holder.js/100%x180"
                  src={this.props.ama[3].url}
                  data-holder-rendered="true"
                  onClick={this.toggleId}
                />
              </div>
            </div>
            <div className="col-sm-6 col-md-6  ">
              <div className="center">
                <img
                  className="thumbnail"
                  id="4"
                  alt="100%x180"
                  data-src="holder.js/100%x180"
                  src={this.props.ama[4].url}
                  data-holder-rendered="true"
                  onClick={this.toggleId}
                />
              </div>
            </div>
            <div className="col-sm-6 col-md-6  ">
              <div className="center">
                <img
                  className="thumbnail"
                  id="5"
                  alt="100%x180"
                  data-src="holder.js/100%x180"
                  src={this.props.ama[5].url}
                  data-holder-rendered="true"
                  onClick={this.toggleId}
                />
              </div>
            </div>
            <div className="col-sm-6 col-md-6  ">
              <div className="center">
                <img
                  className="thumbnail"
                  id="6"
                  alt="100%x180"
                  data-src="holder.js/100%x180"
                  src={this.props.ama[6].url}
                  data-holder-rendered="true"
                  onClick={this.toggleId}
                />
              </div>
            </div>
            <div className="col-sm-6 col-md-6  ">
              <div className="center">
                <img
                  className="thumbnail"
                  id="7"
                  alt="100%x180"
                  data-src="holder.js/100%x180"
                  src={this.props.ama[7].url}
                  data-holder-rendered="true"
                  onClick={this.toggleId}
                />
              </div>
            </div>
            <div className="button center">
              <button className="btn btn-default" role="button">
                Show More
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(Home);
