import {useState} from "react";

async function doRequest(url, method, body) {
    const [response, setResponse] = useState(null)
    return fetch(url, {method: method, body: body}).then((response) => response.json()).then((data) => setResponse(data)).then(response);
}

export default doRequest()