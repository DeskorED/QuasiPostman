import React from "react";
import InputProperties from "./InputProperties";
import NewInputField from "./NewInputField";

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
                        <InputProperties value={key}/>
                    </td>
                    <td>
                        <InputProperties value={value}/>
                    </td>
                </tr>)
            }
        }
        return table;
    }


    return <table>
        <tbody border="2px solid black">
            {tableMaker()}
            <NewInputField/>
        </tbody>
    </table>


}

export default ReqTable