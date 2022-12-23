import {TypeChanger} from "./TypeChanger";
import RequestBar from "./RequestBar/RequestBar";
import React, {useState} from "react";
import "./style.scss"

export function RequestSend({setResponse,setResponseBody, requestBody,requestHeaders, requestMethod, setRequestMethod, errors}) {

    const [error, setError] = useState(false);
    return (<div className={"requestSend"}>
        <TypeChanger propMethod={requestMethod} methodChange={setRequestMethod}/>
        <RequestBar
            requestMethod={requestMethod}
            errors={errors}
            requestBody={requestBody}
            requestHeaders={requestHeaders}
            setResponseBody={setResponseBody}
            setResponse={setResponse}
            setError={setError}
            myError={error}
        />
    </div>);
}