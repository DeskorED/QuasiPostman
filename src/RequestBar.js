import React, {useState} from "react";
import ReqTable from "./ReqTable";
import Button from "./Button";
import doRequest from "./doRequest";

function RequestBar(props) {
    const [url, setUrl] = useState("https://rickandmortyapi.com/api");
    const [error, setError] = useState(false);
    const [body, setBody] = useState(null);
    const method = props.method;
    const [response, setResp] = useState("");


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

    function onButtonClick(){
        const a = doRequest(url,method,body)
        setResp(a)
    }

    return (
        <>
            <input onChange={onHandleChange}/>
            <Button onClick={onButtonClick} children={"Send"}/>
            <ReqTable response={response}/>
        </>

    )

}

export default RequestBar;