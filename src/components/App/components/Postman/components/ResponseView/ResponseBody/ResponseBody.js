import "./style.scss"
import React from "react";
import {prettyPrint} from 'html';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {tomorrowNightEighties} from 'react-syntax-highlighter/dist/esm/styles/hljs';

export function ResponseBody({responseBody, content_type}) {
    let bodyText = "";
    let prettier = false;
    if (content_type) {
        if (content_type.includes('application/json') || content_type.includes('text/html')) {
            prettier = true;
        }
    }
    const [prettify, setPrettify] = React.useState(false)
    if (responseBody) {
        bodyText = responseBody;
        if (prettify) {
            const prettifyHTML = (html) => {
                return prettyPrint(html, {indent_size: 2});
            };
            if (bodyText.includes("<")) {
                bodyText = prettifyHTML(bodyText);
            } else {
                bodyText = JSON.stringify(JSON.parse(bodyText), null, 2);
            }
        }
    }

    return (
        <>
            <div className={'pretty'}>
                {prettier && <input id={"prettify"} type={"checkbox"} onChange={(e) => setPrettify(e.target.checked)}/>}
                <label htmlFor={"prettify"}>Prettify</label>
            </div>
            <SyntaxHighlighter
                style={tomorrowNightEighties}
            >
                {bodyText}
            </SyntaxHighlighter>

        </>
    );
}