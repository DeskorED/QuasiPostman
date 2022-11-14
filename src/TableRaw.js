import InputProperties from "./InputProperties";
import {useState} from "react";

function TableRaw(props) {
    const [isLast,setCount] = useState()
    return <tr key={props.key}>
        <td>
            <InputProperties value={props.key}/>
        </td>
        <td>
            <InputProperties value={props.value}/>
        </td>
    </tr>
}

export default TableRaw