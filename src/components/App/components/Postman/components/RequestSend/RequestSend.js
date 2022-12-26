import {TypeChanger} from "./TypeChanger";
import RequestBar from "./RequestBar/RequestBar";
import React, {useState} from "react";
import "./style.scss"

export function RequestSend({onSendRequest,requestMethod, setRequestMethod, errors}) {

    const [error, setError] = useState(false);
    return (<div className={"requestSend"}>
        <TypeChanger propMethod={requestMethod} methodChange={setRequestMethod}/>
        <RequestBar
            errors={errors}
            onSendRequest={onSendRequest}
            setError={setError}
            error={error}
        />
    </div>);
}