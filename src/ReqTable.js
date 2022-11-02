import React from "react";

class ReqTable extends React.Component{
    constructor(props) {
        super(props);
        this.response = props.response;
        this.table = "";
    }

    tableMaker(){
        for(let elem of JSON.parse(this.response.json)){
            this.table += <tr>
                <td>
                    {elem.entries[0]}
                </td>
                <td>
                    {elem.entries[1]}
                </td>
            </tr>
        }
        return this.table
    }

    display(){
        console.log(this.response);
    }
    render() {
        return <table>
            {this.tableMaker()}
        </table>
    }


}
export default ReqTable