import './style.scss';

export function BodyTextArea({setBody}) {

    return (<div>
        <textarea
            className={"bodyTextArea"}
            onChange={e => setBody(e.target.value)}>
    </textarea>
    </div>)
}