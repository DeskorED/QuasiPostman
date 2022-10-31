import React from "react";

class RequestBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url: "",
            error: false
        };
    }

    isValidUrl = urlString => {
        let urlPattern = new RegExp('^(https?:\\/\\/)?' +
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
            '((\\d{1,3}\\.){3}\\d{1,3}))' +
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
            '(\\?[;&a-z\\d%_.~+=-]*)?' +
            '(\\#[-a-z\\d_]*)?$', 'i');
        return !!urlPattern.test(urlString);
    }

    onHandleChange(event) {
        let value = event.target.value;
        if (this.isValidUrl(value)) {
            this.state.url = value
            this.state.error = false;

        } else {
            this.state.error = true;
        }
    }

    render() {
        return (<input onChange={this.onHandleChange}/>)
    }
}