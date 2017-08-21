import React from "react"

const timeLeft = "09:00"
const ChatTimeLeft = (props) => {
    return (<div>
    <span><strong>Time Left :{props.time}</strong></span>
    <p className="end-ama"><strong>End AMA Now ?</strong></p>
    </div>)}


const ShareAma = () => <div className="circleBase type1"><span><h4 className="text-center"> share this ama </h4></span></div>

export default class ChatHeader extends React.Component {
    render() {
        return (
            <div className = "page-header">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-10 col-md-10">
                            <p className = "notbold"> LetsVenture Ask Me Anything </p>
                            <p><strong>Session Ask Me AnyThing With Mahesh Sharma</strong></p>
                        </div>
                        <div className="col-sm-2 col-md-2">
                        {(this.props.type === "host") ?
                            <ChatTimeLeft time={timeLeft}/> : <ShareAma />
                        }

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
