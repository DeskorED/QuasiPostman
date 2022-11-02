import {useState} from "react";

function ServerRequests() {

    const [url, setUrl] = useState("");
    const [typeResp, setType] = useState("GET");
    const [response, setResponse] = useState("")
    const [formData, setForm] = useState(new FormData())


    function setType(typeResp) {
        setType(typeResp);
    }

    function setURl(url) {
        setUrl(url)
    }

    function setFormData(formData) {
        setForm(formData);
    }

    function respSend()
    {
        fetch(url, {
            method: typeResp,
            body: formData
        })
            .then(
                response => setResponse(response)
            ).then(
            text => console.log(text)
        );
    }

    function getStatus()
    {
        if (response) {
            return {
                status: response.status,
            };
        }
    }

    function getResponse()
    {
        return response;
    }
}

export default ServerRequests