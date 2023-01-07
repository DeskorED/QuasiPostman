import "./style.scss"
import React from "react";
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {dark} from 'react-syntax-highlighter/dist/esm/styles/prism';
import { prettyPrint } from 'html';

export function ResponseBody({responseBody}) {
    let bodyText = ""
    const [prettify, setPrettify] = React.useState(false)
    if (responseBody) {
        bodyText = responseBody;
        if (prettify) {
            const prettifyHTML = (html) => {
                return prettyPrint(html, {indent_size: 2});
            };
            if(bodyText.includes("<")){
                bodyText = prettifyHTML(bodyText);
            }
            else{
                bodyText = JSON.stringify(JSON.parse(bodyText), null, 2);
            }
        }
    }

    return <>
        <textarea
            className={"responseBody"}
            readOnly={true}
            value={bodyText}>
             <SyntaxHighlighter style={dark}>
                 {bodyText}
            </SyntaxHighlighter>
        </textarea>
        <input id={"prettify"} type={"checkbox"} onChange={(e) => setPrettify(e.target.checked)}/>
        <label htmlFor={"prettify"}>Prettify</label>
    </>
}