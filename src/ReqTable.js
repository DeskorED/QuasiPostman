import React from "react";

function ReqTable(props) {

    const headers = props.response.headers;
    let table = [];
    table.push(<tr key={"Header"}>
        <th>Ключ</th>
        <th>Значение</th>
    </tr>)

    function tableMaker() {
        if (headers) {
            console.log(headers)
            for (let [key, value] of headers ) {
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