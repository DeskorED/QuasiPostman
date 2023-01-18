import { RequestSend } from "./components/RequestSend";
import { RequestView } from "./components/RequestView";
import { ResponseView } from "./components/ResponseView";
import { RequestService } from "services/RequestService";
import { Line } from "components/Line";

import React from "react";
import { hasErrors } from "utility";

import "./style.scss";

export function Postman() {
    const [response, setResponse] = React.useState(undefined);
    const [requestBody, setRequestBody] = React.useState(undefined);
    const [requestHeaders, setRequestHeaders] = React.useState({});
    const [requestMethod, setRequestMethod] = React.useState("GET");

    const sendRequest = (url) => {
        RequestService.sendRequest({
            url,
            requestMethod,
            requestHeaders,
            requestBody,
        }).then((response) => setResponse(response));
    };

    let disabled = hasErrors(requestHeaders);

    return (
        <div className="postman-page">
            <RequestSend
                disabled={disabled}
                requestMethod={requestMethod}
                setRequestMethod={setRequestMethod}
                onSendRequest={sendRequest}
            />
            <Line />
            <RequestView
                method={requestMethod}
                setRequestBody={setRequestBody}
                requestBody={requestBody}
                requestHeaders={requestHeaders}
                setRequestHeaders={setRequestHeaders}
            />
            <Line />
            {response && (
                <ResponseView
                    statusCode={response?.statusCode}
                    requestTime={response?.requestTime}
                    responseHeaders={response?.headers}
                    responseBody={response?.body}
                />
            )}
        </div>
    );
}
