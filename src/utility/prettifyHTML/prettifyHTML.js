import { prettyPrint } from "html";

export const prettifyHTML = (html) => {
    return prettyPrint(html, { indent_size: 2 });
};
