import React, {useState} from "react";
import Button from "../../Button/Button";
import TextField from "../../TextField/TextField";
import "./style.scss"

const DEFAULT_URL = "https://rickandmortyapi.com/api"

export function RequestBar({
                               error,
                               setError,
                               errors,
                               onSendRequest,
                           }) {
    const [url, setUrl] = useState(DEFAULT_URL);

    let isValidUrl = urlString => {
        let urlPattern = new RegExp('^(https?:\\/\\/)?' + '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + '((\\d{1,3}\\.){3}\\d{1,3}))' + '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + '(\\?[;&a-z\\d%_.~+=-]*)?' + '(\\#[-a-z\\d_]*)?$', 'i');
        setError(!urlPattern.test(urlString));
    }

    let isErrors = (function () {
        for (let error of errors) {
            if (error.key === true || error.value === true) {
                return true;
            }
        }
        isValidUrl(url);
        return error;
    })()

    return (<>
        <TextField className={"requestBar"}
                   onChange={(e) => setUrl(e.target.value)}
                   value={url}/>
        <Button className={"send"} onClick={() => {
            onSendRequest(url);
        }} disabled={isErrors} children={"Send"}/>
    </>);
}

export default RequestBar;