class ServerRequests {
    constructor() {
        this.url = "";
        this.typeResp = "GET";
        this.response = "";
        this.formData = new FormData();

    }

    setType(typeResp) {
        this.typeResp = typeResp;
    }

    setURl(url) {
        this.url = url;
    }

    setFormData(formData){
        this.formData = formData;
    }

    respSend() {
        fetch(this.url, {
            method:this.typeResp,
            body: this.formData
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
        return this.response.json;
    }
}

export default ServerRequests