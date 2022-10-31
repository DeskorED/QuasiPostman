import React from "react";
import RequestButton from "./RequestButton";

class RequestBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url: "",
            error: false,
            type: props.type
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
            this.setState({url: value, error: false, type: this.state.type})
        } else {
            this.setState({url: this.state.url, error: true, type: this.state.type})
        }
    }

    render() {
        return (
            <>
                <input onChange={this.onHandleChange}/>
                <RequestButton type={this.state.type} url={this.state.url}/>
            </>

        )
    }
}

export default RequestBar;