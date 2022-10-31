class ServerRequests {
    constructor() {
        this.result = null;
        this.xmlHttpRequest = new XMLHttpRequest();

        this.xmlHttpRequest.onload = function () {
            this.result = this.xmlHttpRequest;
        };

        this.xmlHttpRequest.onerror = function () {
            console.log(`Ошибка соединения`);
        };

    }

    setType(typeResp) {
        this.typeResp = typeResp;
    }

    setURl(url) {
        this.url = url;
    }

    respSend() {
        this.xmlHttpRequest.open(this.typeResp, this.url);
        this.xmlHttpRequest.send();
    }

    getStatus() {
        return {
            status: this.result.status,
            statusText: this.result.statusText
        };
    }

    getResponse() {
        return this.result.response;
    }
}