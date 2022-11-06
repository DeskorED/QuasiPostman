import React from "react";

function ReqTable(props) {

    const response = props.response;
    let table = [];
    table.push(<tr key={"Header"}>
        <th>Ключ</th>
        <th>Значение</th>
    </tr>)

    function tableMaker() {
        if (response) {
            console.log(response)
            for (let [key, value] of response.headers) {
                table.push(<tr key={key}>
                    <td>
                        <input>{key}</input>
                    </td>
                    <td>
                        <input>{value}</input>
                    </td>
                </tr>)
            }
        }
        return table;
    }


    return <table>
        <tbody border="2px solid black">
            {tableMaker()}
            <tr>
                <td>
                    <input></input>
                </td>
                <td>
                    <input></input>
                </td>
            </tr>
        </tbody>
    </table>


}

export default ReqTable