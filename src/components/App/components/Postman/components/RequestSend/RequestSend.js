import {TypeChanger} from "./TypeChanger";
import RequestBar from "./RequestBar/RequestBar";
import React, {useState} from "react";
import "./style.scss"

export function RequestSend({setResponse, body, method, setMethod}) {

    const [error, setError] = useState(false);
    return (<div className={"requestSend"}>
        <TypeChanger propMethod={method} methodChange={setMethod}/>
        <RequestBar
            method={method}
            body={body}
            setChange={setResponse}
            setError={setError}
            myError={error}
        />
    </div>);
}