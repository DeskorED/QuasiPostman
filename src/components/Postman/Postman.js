import {RequestSend} from "./RequestSend";
import {Request} from "./Request";
import {Response} from "./Response";
import React from "react";

export function Postman() {
    const [response, setResponse] = React.useState([]);
    const [body, setBody] = React.useState('');
    const [headers, setHeaders] = React.useState([]);
    return (<>
        <RequestSend
            setChange={setResponse}
            myBody={body}
        />
        <Request
            setBody={setBody}
            myHeaders={headers}
            setHeaders={setHeaders}
        />
        <Response myResponse={response}/>
    </>);
}