class HttpRequest {

    constructor(url, type) {
        this.url = url;
        this.method = type;
        this.response = null;
        this.body = null;
        this.setURl = this.setURl.bind(this);
        this.setMethod = this.setMethod.bind(this);
        this.setBody = this.setBody.bind(this);
        this.send = this.send.bind(this);
        this.getResponse = this.getResponse.bind(this);
        this.getStatus = this.getStatus.bind(this);
    }


    setMethod(method) {
        this.method = method;
    }

    setURl(url) {
        this.url = url;
    }

    setBody(body) {
        this.body = body;
    }

    send() {
        this.response = fetch(this.url, {method: this.method, body: this.body})
        return this.response
    }

    getStatus() {
        if (this.response) {
            return {
                status: this.response.status,
            };
        }
    }

    getResponse() {
        return this.response;
    }
}

export default HttpRequest