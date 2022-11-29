import {HeadersEditTable} from "./components/HeadersEditTable";
import {BodyTextArea} from "./components/BodyTextArea";
import {useState} from "react";
import Button from "../Button/Button";
import "./style.scss"

export function RequestView({headers, setHeaders, requestBody, setBody, method}) {
    const [type, setType] = useState("Headers");
    let isBodyDisabled = (method === "GET" || method === "HEAD");


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
            disabled={isBodyDisabled}
            value={"Body"}
        />
        {type === "Headers" && <HeadersEditTable
            headers={headers}
            setHeaders={setHeaders}
        />}
        {type === "Body" && <BodyTextArea
            setBody={setBody}
            requestBody={requestBody}
            method={method}
        />}
    </div>)
}