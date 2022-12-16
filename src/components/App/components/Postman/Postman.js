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
    const [method, setMethod] = useState("GET");
    return (<div className={"postmanPage"}>
        <RequestSend
            isErrors={(function (){
                for (let error in errors) {
                    if (error.key === true || error.value === true) {
                       return true;
                    }
                }
                return false
            })()}
            method={method}
            setMethod={setMethod}
            setResponse={setResponse}
            setResponseBody={setResponseBody}
            requestBody={body}
            requestHeaders={headers}
        />
        <hr/>
        <RequestView
            method={method}
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