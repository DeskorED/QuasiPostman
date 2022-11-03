import React from "react";

function ReqTable(props) {

    const response = props.response;
    let table = [];

    function tableMaker() {
        if (response) {
            console.log(response)
            for (let [key, value] of response.headers) {
                table.push(<tr>
                    <td>
                        {key}
                    </td>
                    <td>
                        {value}
                    </td>
                </tr>)
            }
            return table;
        }
        return <tr>
            <td>ключ</td>
            <td>значение</td>
        </tr>
    }


    return <table border="2px solid black" >
        <tbody>
            {tableMaker()}
        </tbody>
    </table>


}

export default ReqTable