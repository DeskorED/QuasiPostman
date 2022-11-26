import {TypeChanger} from "./TypeChanger";
import RequestBar from "./RequestBar/RequestBar";
import React, {useState} from "react";

export function RequestSend({setChange, myBody}) {
    const [method, setMethod] = useState("GET");
    const [error, setError] = useState(false);
    return (<>
        <TypeChanger propMethod={method} methodChange={setMethod}/>
        <RequestBar
            method={method}
            myBody={myBody}
            setChange={setChange}
            setError={setError}
            myError={error}
        />
    </>);
}