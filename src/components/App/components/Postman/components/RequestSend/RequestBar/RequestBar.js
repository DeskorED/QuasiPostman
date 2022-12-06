import React, {useState} from "react";
import Button from "../../Button/Button";
import TextField from "../../TextField/TextField";
import "./style.scss"

const DEFAULT_URL = "https://rickandmortyapi.com/api"

export function RequestBar({requestMethod, setResponse, setResponseBody, requestBody, requestHeaders, myError, setError}) {
    const [url, setUrl] = useState(DEFAULT_URL);
    const error = myError;
    const body = requestBody
    let result = {};
    requestHeaders.map(({key, value}) => {
        result[key] = value;
    });
    const headers = result;
    const method = requestMethod;

    let isValidUrl = urlString => {
        let urlPattern = new RegExp('^(https?:\\/\\/)?' + '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + '((\\d{1,3}\\.){3}\\d{1,3}))' + '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + '(\\?[;&a-z\\d%_.~+=-]*)?' + '(\\#[-a-z\\d_]*)?$', 'i');
        return !!urlPattern.test(urlString);
    }

    function onUrlChange(event) {
        let value = event.target.value;
        isValidUrl(value) ? setError(false) : setError(true);
        setUrl(value);
    }

    function sendRequest() {
        fetch(url, {method: method, body: body})
            .then((response) => response.json())
            .then((response) => setResponseBody(response))
        fetch(url, {method: method, body: body, headers: headers})
            .then((response) => setResponse(response))


    }

    return (<>
            <TextField className={"requestBar"} onChange={onUrlChange} value={url}/>
            <Button onClick={sendRequest} children={"Send"}/>
        </>

    )

}

export default RequestBar;