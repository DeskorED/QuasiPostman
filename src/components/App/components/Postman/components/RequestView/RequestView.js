import {HeadersEditTable} from "./components/HeadersEditTable";
import {BodyTextArea} from "./components/BodyTextArea";
import {useState} from "react";
import Button from "../Button/Button";
import "./style.scss"

export function RequestView({headers, setHeaders, requestBody, setBody, method, setErrors, errors}) {
    const [type, setType] = useState("Headers");
    const isBodyDisabled = (method === "GET" || method === "HEAD");

    return (<div className={"request"}>
        <Button onClick={(e) => {
            setType(e.target.value)
        }}
                className={type === "Headers" ? "selected" : ""}
                value={"Headers"}
        />
        <Button
            onClick={(e) => {
                setType(e.target.value)
            }}
            className={type === "Body" ? "selected" : ""}
            disabled={isBodyDisabled}
            value={"Body"}
        />
        {type === "Headers" && <HeadersEditTable
            headers={headers}
            setErrors={setErrors}
            errors={errors}
            setHeaders={setHeaders}
        />}
        {type === "Body" && <BodyTextArea
            setBody={setBody}
            requestBody={requestBody}
            method={method}
        />}
    </div>)
}