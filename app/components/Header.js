import React from "react";

export default class Header extends React.Component {
    render() {
        return (
            <div className = "page-header">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-10 col-md-10">
                            <a className="navbar-brand brand-white-new hidden-xs hidden-ms" target="_self" href="/"><img alt="LV" src="https://s3-ap-southeast-1.amazonaws.com/letsventure/public/lvlogoblue.png"></img></a>
                        </div>
                        <div className="col-sm-2 col-md-2">
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
