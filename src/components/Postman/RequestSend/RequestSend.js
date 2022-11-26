import {TypeChanger} from "./TypeChanger";
import RequestBar from "./RequestBar/RequestBar";
import React, {useState} from "react";

export function RequestSend() {
    const [method, setMethod] = useState("GET");
    return (
        <>
            <TypeChanger propMethod={method} methodChange={setMethod}/>
            <RequestBar requestMethod={method}/>
        </>
    )
}