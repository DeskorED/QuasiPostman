import React, {useState} from "react";
import Button from "../../Button/Button";
import TextField from "../../TextField/TextField";
import "./style.scss"

const DEFAULT_URL = "https://rickandmortyapi.com/api"

export function RequestBar({
                               errors,
                               onSendRequest,
                           }) {
    const [url, setUrl] = useState(DEFAULT_URL);
    let error = false;

    let isValidUrl = urlString => {
        let urlPattern = new RegExp('^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$', 'i');
        error = !urlPattern.test(urlString);
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