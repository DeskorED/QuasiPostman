import { HTTPmethods } from "constants/Constants";

const FUNCTION_URL =
    "https://qtopftcjqwacyju3bfalpsswsu0uqwie.lambda-url.us-east-1.on.aws/";

export class RequestService {
    static async sendRequest({ url, method, headers, body }) {
        let startTime = new Date();
        const headersObject = {};

        if (typeof headers === "object") {
            Object.entries(headers).forEach(([key, value]) => {
                if (key) {
                    headersObject[key] = value;
                }
            });
        }
        const options = {
            method: HTTPmethods.POST,
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
