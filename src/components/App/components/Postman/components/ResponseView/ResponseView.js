import {useState} from "react";
import Button from "../Button/Button";
import {ResponseBody} from "./ResponseBody";
import {ResponseHeaders} from "./ResponseHeaders";
import "./style.scss"

export function ResponseView({responseHeaders, responseBody, statusCode, requestTime}) {
    const [type, setType] = useState("Headers");
    return (<div className={"request"}>
        <Button
            onClick={(e) => {
                setType(e.target.value);
            }}
            className={type === "Headers" ? "selected" : ""}
            value={"Headers"}
            disabled={responseHeaders == null}
        />
        <Button
            onClick={(e) => {
                setType(e.target.value)
            }}
            className={type === "Body" ? "selected" : ""}
            value={"Body"}
            disabled={responseBody == null}
        />
        {
            responseHeaders &&
            <span className={"metrics"}>
                |   Status :
                <span className={"responseInfo"}>
                     {statusCode}
                </span>
                |   Time :
                <span className={"responseInfo"}>
                     {requestTime} ms
                </span>
                |
            </span>
        }
        {type === "Headers" && <ResponseHeaders
            responseHeaders={responseHeaders}

        />}
        {type === "Body" && <ResponseBody
            responseBody={responseBody}
            content_type={responseHeaders['content-type']}
        />}
    </div>)
}