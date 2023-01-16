import React from "react";
import { prettyPrint } from "html";
import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrowNightEighties } from "react-syntax-highlighter/dist/esm/styles/hljs";

import "./style.scss";

export function ResponseBody({ responseBody, contentType }) {
    let bodyText = "";
    let prettier = false;
    if (
        contentType?.includes("application/json") ||
        contentType?.includes("text/html")
    ) {
        prettier = true;
    }
    const [prettify, setPrettify] = React.useState(false);
    if (responseBody) {
        bodyText = responseBody;
        if (prettify) {
            const prettifyHTML = (html) => {
                return prettyPrint(html, { indent_size: 2 });
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
            <div className={"pretty"}>
                {prettier && (
                    <input
                        id={"prettify"}
                        type={"checkbox"}
                        onChange={(e) => setPrettify(e.target.checked)}
                    />
                )}
                <label htmlFor={"prettify"}>Prettify</label>
            </div>
            <SyntaxHighlighter
                className="response-body__syntax-highlighter"
                style={tomorrowNightEighties}
            >
                {bodyText}
            </SyntaxHighlighter>
        </>
    );
}
