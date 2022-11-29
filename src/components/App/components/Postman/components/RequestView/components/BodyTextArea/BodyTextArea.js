import './style.scss';

export function BodyTextArea({setBody, requestBody}) {

    return (<div>
        <textarea
            className={"bodyTextArea"}
            onChange={e => setBody(e.target.value)}
            value={requestBody}
        >
    </textarea>
    </div>)
}