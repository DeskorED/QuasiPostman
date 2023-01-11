import {TypeChanger} from "./TypeChanger";
import RequestBar from "./RequestBar/RequestBar";
import React, {useState} from "react";
import "./style.scss"

export function RequestSend({onSendRequest,requestMethod, setRequestMethod, errors}) {

    return (<div className={"requestSend"}>
        <TypeChanger propMethod={requestMethod} methodChange={setRequestMethod}/>
        <RequestBar
            errors={errors}
            onSendRequest={onSendRequest}
        />
    </div>);
}