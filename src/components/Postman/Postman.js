import {RequestSend} from "./RequestSend";
import {Request} from "./Request";
import {Response} from "./Response";

export function Postman() {
    const [response, setResponse] = React.useState('');
    const [body, setBody] = React.useState('');
    return (<>
        <RequestSend
            setChange={setResponse}
            myBody={body}
        />
        <Request setBody={setBody}/>
        <Response myResponse={response}/>
    </>);
}