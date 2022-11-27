import {HeadersEditTable} from "./components/HeadersEditTable";
import {BodyTextArea} from "./components/BodyTextArea";
import {useState} from "react";
import Button from "../Button/Button";

export function RequestView({myHeaders, setHeaders, setBody, method}) {
    const [type, setType] = useState("Headers");
    console.log(type)

    return (<div className={"request"}>
        <Button onClick={(e) => {
            setType(e.target.value)
        }}
                value={"Headers"}
        />
        <Button onClick={(e) => {
            setType(e.target.value)
        }}
                value={"Body"}
        />
        {type === "Headers" && <HeadersEditTable
            myHeaders={myHeaders}
            setHeaders={setHeaders}
        />}
        {type === "Body" && <BodyTextArea
            setBody={setBody}
            method={method}
        />}
    </div>)
}