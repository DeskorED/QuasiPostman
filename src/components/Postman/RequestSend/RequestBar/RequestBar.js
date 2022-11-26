import React, {useState} from "react";
import Button from "../../../Button/Button";
import TextField from "../../TextField/TextField";
import {ErrorWarningPanel} from "../ErrorWarningPanel";


export function RequestBar({requestMethod, setChange, myBody, myError, setError}) {
    const [url, setUrl] = useState("https://rickandmortyapi.com/api");
    const error = myError;
    const body = myBody
    const method = requestMethod;

    let isValidUrl = urlString => {
        let urlPattern = new RegExp('^(https?:\\/\\/)?' + '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + '((\\d{1,3}\\.){3}\\d{1,3}))' + '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + '(\\?[;&a-z\\d%_.~+=-]*)?' + '(\\#[-a-z\\d_]*)?$', 'i');
        return !!urlPattern.test(urlString);
    }

    function onHandleChange(event) {
        let value = event.target.value;
        isValidUrl(value) ? setError(false) : setError(true);
        setUrl(value);
    }

    function onButtonClick() {
        return fetch(url, {method: method, body: body})
            .then((response) => response.json())
            .then((data) => setChange(data))

    }

    return (<>
            <TextField onChange={onHandleChange}/>
            {
                !error && <ErrorWarningPanel/>
            }
            <Button onClick={onButtonClick} children={"Send"}/>
        </>

    )

}

export default RequestBar;