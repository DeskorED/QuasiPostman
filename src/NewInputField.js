import React from "react";
import NewKeyInput from "./NewKeyInput";
import NewValueInput from "./NewValueInput";

function NewInputField(props) {
    return <tr>
        <td>
            <NewKeyInput onChangeKey={props.onChangeKey}/>
        </td>
        <td>
            <NewValueInput/>
        </td>
    </tr>
}

export default NewInputField