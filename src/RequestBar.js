import React, {useState} from "react";
import RequestButton from "./RequestButton";

function RequestBar(props) {
    const [url, setUrl] = useState("https://rickandmortyapi.com/api");
    const [error, setError] = useState(false);
    const type = props.type;


    let isValidUrl = urlString => {
        let urlPattern = new RegExp('^(https?:\\/\\/)?' +
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
            '((\\d{1,3}\\.){3}\\d{1,3}))' +
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
            '(\\?[;&a-z\\d%_.~+=-]*)?' +
            '(\\#[-a-z\\d_]*)?$', 'i');
        return !!urlPattern.test(urlString);
    }

    function onHandleChange(event) {
        let value = event.target.value;
        if (isValidUrl(value)) {
            setUrl(value);
            setError(false);
        } else {
            setUrl(value);
            setError(true);
        }
    }


    return (
        <>
            <input onChange={onHandleChange}/>
            <RequestButton type={type} url={url}/>
        </>

    )

}

export default RequestBar;