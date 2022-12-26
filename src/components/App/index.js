import {RequestService} from "../../services/RequestService";

export {App} from "./App";

RequestService.sendRequest({
    url: 'https://google.com',
    headers: [
        {key: 'Accept', value: 'text/html'},
        {key: 'Accept', value: 'application/json'},
    ],
    method: 'GET',
}).then(console.log);