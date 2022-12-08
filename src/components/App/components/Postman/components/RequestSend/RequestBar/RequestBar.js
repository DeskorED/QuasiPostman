import React, {useState} from "react";
import Button from "../../Button/Button";
import TextField from "../../TextField/TextField";
import "./style.scss"
import {ErrorWarningPanel} from "../ErrorWarningPanel";

const DEFAULT_URL = "https://rickandmortyapi.com/api"

export function RequestBar({
                               requestMethod,
                               setResponse,
                               setResponseBody,
                               requestBody,
                               requestHeaders,
                               myError,
                               setError
                           }) {
    const [url, setUrl] = useState(DEFAULT_URL);
    const error = myError;
    const headers = new Headers();
    requestHeaders.forEach(({key, value}) => {
        if (key) {
            headers.append(key, value);
        }
    });
    const method = requestMethod;
    let body = requestBody

    let isValidUrl = urlString => {
        let urlPattern = new RegExp('^(https?:\\/\\/)?' + '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + '((\\d{1,3}\\.){3}\\d{1,3}))' + '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + '(\\?[;&a-z\\d%_.~+=-]*)?' + '(\\#[-a-z\\d_]*)?$', 'i');
        return !!urlPattern.test(urlString);
    }

    function sendRequest() {
        isValidUrl(url) ? setError(false) : setError(true);
        const options = {
            method: method,
            headers: headers
        }
        if (method !== "GET" || method !== "HEAD") {
            options.body = body
        }
        fetch(url, options)
            .then((response) => {
                setResponse(response);
                return response.json();
            })
            .then((response) => setResponseBody(response))

    }

    return (<>
            {error && <ErrorWarningPanel/>}
            <TextField className={"requestBar"}
                       onChange={
                           (e) => setUrl(e.target.value)
                       }
                       value={url}/>
            <Button onClick={sendRequest} children={"Send"}/>
        </>

    )

}

export default RequestBar;