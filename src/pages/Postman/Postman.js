import { RequestSend } from "./components/RequestSend";
import { RequestView } from "./components/RequestView";
import { ResponseView } from "./components/ResponseView";
import { RequestService } from "services/RequestService";
import { Line } from "components/Line";

import React from "react";

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

    let hasErrors = false;
    Object.values(requestHeaders).forEach((header) => {
        if (header.keyError || header.valueError) {
            hasErrors = true;
        }
    });

    return (
        <div className="postman-page">
            <RequestSend
                disabled={hasErrors}
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
            <ResponseView
                statusCode={response?.statusCode}
                requestTime={response?.requestTime}
                responseHeaders={response?.headers}
                responseBody={response?.body}
            />
        </div>
    );
}
