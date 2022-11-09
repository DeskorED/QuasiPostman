import React from "react";

function ReqTable(props) {

    const response = props.response;
    console.log(response)
    let table = [];
    table.push(<tr key={"Header"}>
        <th>Ключ</th>
        <th>Значение</th>
    </tr>)

    function tableMaker() {
        if (response) {

            for (let [key, value] of Object.entries(response) ) {
                table.push(<tr key={key}>
                    <td>
                        <input value={key} placeholder={key}/>
                    </td>
                    <td>
                        <input value={value} placeholder={value}/>
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