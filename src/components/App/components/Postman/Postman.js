import {RequestSend} from "./components/RequestSend";
import {RequestView} from "./components/RequestView";
import {ResponseView} from "./components/ResponseView";
import React, {useState} from "react";

export function Postman() {
    const [response, setResponse] = React.useState();
    const [body, setBody] = React.useState(undefined);
    const [headers, setHeaders] = React.useState([]);
    const [method, setMethod] = useState("GET");
    return (<>
        <RequestSend
            method={method}
            setMethod={setMethod}
            setChange={setResponse}
            myBody={body}
        />
        <RequestView
            method={method}
            setBody={setBody}
            myHeaders={headers}
            setHeaders={setHeaders}
        />
        <ResponseView myResponse={response}/>
    </>);
}