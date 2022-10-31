import React from "react";
import RequestBar from "./requestBar";

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
            <div>
                <select onChange={this.handleChange}>
                    <option value={"GET"} selected="selected"> GET</option>
                    <option value={"POST"}> POST</option>
                    <option value={"PUT"}> PUT</option>
                    <option value={"PATCH"}> PATCH</option>
                    <option value={"DELETE"}> DELETE</option>
                    <option value={"CONNECT"}> CONNECT</option>
                </select>
                <RequestBar type={this.state}/>
            </div>
        )
    }
}