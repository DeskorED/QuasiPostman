import React, {useState} from "react";
import InputProperties from "./InputProperties";
import NewInputField from "./NewInputField";

function ReqTable(props) {
    const [change, setChange] = useState(true)
    const response = props.response;
    console.log(response)
    let table = [];
    table.push(<tr key={"Header"}>
        <th>Ключ</th>
        <th>Значение</th>
    </tr>)

    function tableMaker() {
        if (response) {

            for (let [key, value] of Object.entries(response)) {
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

    function onChangeKey(event) {
        table.push(<tr key={event.target.value}>
            <td>
                <InputProperties value={event.target.value}/>
            </td>
            <td>
                <InputProperties value={""}/>
            </td>
        </tr>)
        setChange(!change)
    }

    function onChangeValue(event) {
        table.push(<tr key={event.target.value}>
            <td>
                <InputProperties value={""}/>
            </td>
            <td>
                <InputProperties value={event.target.value}/>
            </td>
        </tr>)
        setChange(!change)
    }

    return <table>
        <tbody border="2px solid black">
        {tableMaker()}
        <NewInputField onChangeKey={onChangeKey} onChangeValue={onChangeValue}/>
        </tbody>
    </table>


}

export default ReqTable