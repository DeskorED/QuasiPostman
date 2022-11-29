import {RequestSend} from "./components/RequestSend";
import {RequestView} from "./components/RequestView";
import {ResponseView} from "./components/ResponseView";
import "./style.scss"
import React, {useState} from "react";

export function Postman() {
    const [response, setResponse] = React.useState();
    const [body, setBody] = React.useState(undefined);
    const [headers, setHeaders] = React.useState([]);
    const [method, setMethod] = useState("GET");
    return (<div className={"postmanPage"}>
        <RequestSend
            method={method}
            setMethod={setMethod}
            setResponse={setResponse}
            requestBody={body}
        />
        <hr/>
        <RequestView
            method={method}
            setBody={setBody}
            requestBody={body}
            headers={headers}
            setHeaders={setHeaders}
        />
        <hr/>
        <ResponseView response={response}/>
    </div>);
}