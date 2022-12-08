import {useState} from "react";
import Button from "../Button/Button";
import {ResponseBody} from "./ResponseBody";
import {ResponseHeaders} from "./ResponseHeaders";


export function ResponseView({response, responseBody}) {
    const [type, setType] = useState("Headers");

    return (<div className={"request"}>
        <Button
            onClick={(e) => {
            setType(e.target.value)
            }}
                value={"Headers"}
                disabled={response == null}
        />
        <Button
            onClick={(e) => {
                setType(e.target.value)
            }}
            value={"Body"}
            disabled={responseBody == null}
        />
        {type === "Headers" && <ResponseHeaders
            responseHeaders={response}

        />}
        {type === "Body" && <ResponseBody
            responseBody={responseBody}
        />}
    </div>)
}