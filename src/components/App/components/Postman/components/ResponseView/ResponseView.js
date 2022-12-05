import {useState} from "react";
import Button from "../Button/Button";
import {ResponseBody} from "./ResponseBody";
import {ResponseHeaders} from "./ResponseHeaders";


export function ResponseView({response}) {
    const [type, setType] = useState("Headers");

    console.log(response);
    return (<div className={"request"}>
        <Button onClick={(e) => {
            setType(e.target.value)
        }}
                value={"Headers"}
        />
        <Button
            onClick={(e) => {
                setType(e.target.value)
            }}
            value={"Body"}
        />
        {type === "Headers" && <ResponseHeaders
            responseHeaders={response.headers}

        />}
        {type === "Body" && <ResponseBody
            responseBody={response.body}
        />}
    </div>)
}