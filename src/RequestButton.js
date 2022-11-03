import React from "react";
import ServerRequests from "./ServerRequests";
import ReqTable from "./ReqTable";

function RequestButton(props) {


    let srv = new ServerRequests(props.url, props.type);

    return (
        <>
            <button onClick={srv.respSend}> SEND </button>
            <ReqTable response={srv.getResponse()}/>
        </>
    )

}

export default RequestButton;