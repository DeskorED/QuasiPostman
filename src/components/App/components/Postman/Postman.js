import {RequestSend} from "./components/RequestSend";
import {RequestView} from "./components/RequestView";
import {ResponseView} from "./components/ResponseView";
import {RequestService} from "../../../../services/RequestService";
import "./style.scss"
import React, {useState} from "react";

export function Postman() {
    const [responseHeaders, setResponseHeaders] = React.useState();
    const [responseBody, setResponseBody] = React.useState();
    const [body, setBody] = React.useState(undefined);
    const [headers, setHeaders] = React.useState([]);
    const [errors, setErrors] = React.useState([])
    const [requestMethod, setRequestMethod] = useState("GET");
    const[requestTime, setRequestTime] = useState();
    const[statusCode, setStatusCode] = useState();

    function sendRequest(url){
        RequestService.sendRequest({url, requestMethod, headers, body})
            .then((response)=>{
                setResponseHeaders(response.headers);
                setResponseBody(response.body);
                setStatusCode(response.statusCode);
                setRequestTime(response.requestTime);
            })
    }
    return (<div className={"postmanPage"}>
        <RequestSend
            errors={errors}
            requestMethod={requestMethod}
            setRequestMethod={setRequestMethod}
            onSendRequest={sendRequest}
        />
        <hr/>
        <RequestView
            method={requestMethod}
            setBody={setBody}
            requestBody={body}
            headers={headers}
            setErrors={setErrors}
            errors={errors}
            setHeaders={setHeaders}
        />
        <hr/>
        <ResponseView
            statusCode={statusCode}
            requestTime={requestTime}
            responseHeaders={responseHeaders}
            responseBody={responseBody}
        />
    </div>);
}