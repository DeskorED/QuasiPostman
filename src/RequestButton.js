import React from "react";
import ServerRequests from "./ServerRequests";
import ReqTable from "./ReqTable";

class RequestButton extends React.Component{
    constructor(props) {
        super(props);
        this.srv = new ServerRequests();
        this.srv.setType(props.type);
        this.srv.setURl(props.url);
    }

    sendRequest(){
        this.srv.respSend();
    }

    render() {
        return(
            <>
                <button onClick={this.sendRequest}> SEND </button>
                <ReqTable response={this.srv.getResponse} />
            </>
        )
    }

}
export default RequestButton;