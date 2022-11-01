import React from "react";

class ReqTable extends React.Component{
    constructor(props) {
        super(props);
        this.response = props.response;
    }

    display(){
        console.log(this.response);
    }
    render() {
        return <table>
        </table>
    }


}
export default ReqTable