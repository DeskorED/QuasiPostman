import React from "react";

class TypeChanger extends React.Component {
    constructor(props) {
        super(props);
        this.state = "GET";
    }

    handleChange(event) {
        this.state = event.target.value;
    }

    render() {
        return (
            <select onChange={this.handleChange}>
                <option value={"GET"} selected="selected"> GET</option>
                <option value={"POST"}> POST</option>
                <option value={"PUT"}> PUT</option>
                <option value={"PATCH"}> PATCH</option>
                <option value={"DELETE"}> DELETE</option>
                <option value={"CONNECT"}> CONNECT</option>
            </select>
        )
    }
}