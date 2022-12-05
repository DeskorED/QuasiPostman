import TextField from "../../../../TextField/TextField.js";
import "./style.scss"
import DeleteIcon from '@mui/icons-material/Delete';

export function TableRow({headerKey, headerValue, onChangeKey, onChangeValue, isNew, onDeleteRow, index}) {
    return (<tr>
        <td className={"headerTd"}>
            <TextField className={"headerField"} value={headerKey} onChange={e => onChangeKey(e.target.value)}
                       placeholder={isNew ? 'Key' : undefined}/>
        </td>
        <td className={"headerTd"}>
            <TextField className={"headerField"} value={headerValue} onChange={e => onChangeValue(e.target.value)}
                       placeholder={isNew ? 'Value' : undefined}/>
        </td>
        {!isNew && <td className={"deleteTd"}>
            <DeleteIcon className={"deleteIcon"} onClick={() => {
                onDeleteRow(index);
            }}/>
        </td>
        }
    </tr>);
}
