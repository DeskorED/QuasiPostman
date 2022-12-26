import {useState} from "react";
import Button from "../Button/Button";
import {ResponseBody} from "./ResponseBody";
import {ResponseHeaders} from "./ResponseHeaders";


export function ResponseView({responseHeaders, responseBody, statusCode,requestTime}) {
    const [type, setType] = useState("Headers");

    return (<div className={"request"}>
        <Button
            onClick={(e) => {
            setType(e.target.value)
            }}
                value={"Headers"}
                disabled={responseHeaders == null}
        />
        <Button
            onClick={(e) => {
                setType(e.target.value)
            }}
            value={"Body"}
            disabled={responseBody == null}
        />
        {responseHeaders && <span>|  status: {statusCode}  |</span>}
        {responseHeaders && <span> time: {requestTime} ms</span>}
        {type === "Headers" && <ResponseHeaders
            responseHeaders={responseHeaders}

        />}
        {type === "Body" && <ResponseBody
            responseBody={responseBody}
        />}
    </div>)
}