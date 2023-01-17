import { methods } from "constants/Constants";

const FUNCTION_URL =
    "https://qtopftcjqwacyju3bfalpsswsu0uqwie.lambda-url.us-east-1.on.aws/";

export class RequestService {
    static async sendRequest({ url, method, headers, body }) {
        let startTime = new Date();
        const requestHeaders = new Headers();
        headers?.forEach(({ key, value }) => {
            if (key) {
                requestHeaders.append(key, value);
            }
        });
        const headersObject = {};
        [...requestHeaders.entries()].forEach(([key, value]) => {
            headersObject[key] = value;
        });

        const options = {
            method: methods.POST,
            body: JSON.stringify({
                url,
                method,
                headers: headersObject,
                body,
            }),
        };

        const proxyResponse = await fetch(FUNCTION_URL, options);
        const unwrappedResponse = await proxyResponse.json();
        return {
            body: unwrappedResponse.body,
            statusCode: unwrappedResponse.statusCode,
            headers: unwrappedResponse.headers,
            requestTime: new Date() - startTime,
        };
    }
}
