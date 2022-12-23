import {RequestSend} from "./components/RequestSend";
import {RequestView} from "./components/RequestView";
import {ResponseView} from "./components/ResponseView";
import "./style.scss"
import React, {useState} from "react";

export function Postman() {
    const [response, setResponse] = React.useState();
    const [responseBody, setResponseBody] = React.useState();
    const [body, setBody] = React.useState(undefined);
    const [headers, setHeaders] = React.useState([]);
    const [errors, setErrors] = React.useState([])
    const [requestMethod, setRequestMethod] = useState("GET");
    return (<div className={"postmanPage"}>
        <RequestSend
            errors={errors}
            requestMethod={requestMethod}
            setRequestMethod={setRequestMethod}
            setResponse={setResponse}
            setResponseBody={setResponseBody}
            requestBody={body}
            requestHeaders={headers}
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
            response={response}
            responseBody={responseBody}
        />
    </div>);
}