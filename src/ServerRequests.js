class ServerRequests {

    constructor(url, type) {
        this.url = url;
        this.type = type;
        this.response = null;
        this.form = null;
    }


    setType(typeResp) {
        this.type = typeResp;
    }

    setURl(url) {
        this.url = url;
    }

    setFormData(formData) {
        this.form = formData;
    }

    respSend() {
        fetch(this.url, {
            method: this.type,
            body: this.form
        })
            .then(
                response => this.response = response
            ).then(
            text => console.log(text)
        );
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

export default ServerRequests