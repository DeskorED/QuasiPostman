import React, {useState} from "react";
import Button from "../../../Button/Button";
import TextField from "../../../TextField/TextField";


export function RequestBar({requestMethod}) {
    const [url, setUrl] = useState("https://rickandmortyapi.com/api");
    const [error, setError] = useState(false);
    const [body, setBody] = useState(null);
    const method = requestMethod;
    const [response, setResp] = useState("");

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
            .then((data) => setResp(data))

    }

    return (<>
            <TextField onChange={onHandleChange}/>
            <Button onClick={onButtonClick} children={"Send"}/>
        </>

    )

}

export default RequestBar;