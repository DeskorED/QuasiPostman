import { MethodChanger } from "./MethodChanger";
import RequestInput from "./RequestInput/RequestInput";

import React from "react";

import "./style.scss";

export function RequestSend({
    onSendRequest,
    requestMethod,
    setRequestMethod,
    disabled,
}) {
    return (
        <div className="request-send">
            <MethodChanger
                requestMethod={requestMethod}
                setRequestMethod={setRequestMethod}
            />
            <RequestInput disabled={disabled} onSendRequest={onSendRequest} />
        </div>
    );
}
