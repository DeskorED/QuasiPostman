class ServerRequests {

    constructor(url, type) {
        this.url = url;
        this.type = type;
        this.response = null;
        this.form = null;
        this.setURl = this.setURl.bind(this);
        this.setType = this.setType.bind(this);
        this.setFormData = this.setFormData.bind(this);
        this.respSend = this.respSend.bind(this);
        this.getResponse = this.getResponse.bind(this);
        this.getStatus = this.getStatus.bind(this);
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