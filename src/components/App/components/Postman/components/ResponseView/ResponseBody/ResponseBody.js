import "./style.scss"
import React from "react";

export function ResponseBody({responseBody}) {
    let bodyText = ""
    const [prettify, setPrettify] = React.useState(false)
    if (responseBody) {
        bodyText = responseBody;
        if (prettify) {
            bodyText = JSON.stringify(JSON.parse(bodyText), null, 2)
        }
    }

    return <>
        <textarea
            className={"responseBody"}
            readOnly={true}
            value={bodyText}>
    </textarea>
        <input id={"prettify"} type={"checkbox"} onChange={(e) => setPrettify(e.target.checked)}/>
        <label htmlFor={"prettify"}>Prettify</label>
    </>
}