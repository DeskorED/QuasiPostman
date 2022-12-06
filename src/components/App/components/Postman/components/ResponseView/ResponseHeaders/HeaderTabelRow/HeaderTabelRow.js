import TextField from "../../../TextField/TextField";
import "./style.scss"

export function HeaderTabelRow({headerKey, headerValue, isNew}) {
    return (<tr>
        <td className={"headerTd"}>
            <TextField className={"headerField"}
                       value={headerKey}
                       readOnly={true}
                       placeholder={isNew ? 'Key' : undefined}/>
        </td>
        <td className={"headerTd"}>
            <TextField className={"headerField"}
                       value={headerValue}
                       readOnly={true}
                       placeholder={isNew ? 'Value' : undefined}/>
        </td>
    </tr>);
}
