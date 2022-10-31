import React from "react";

class ReqTable extends React.Component{
    constructor(props) {
        super(props);
        this.response = props.response;
        this.renderComp = <></>;
    }

    display(){
        console.log(this.response);
    }


}
export default ReqTable