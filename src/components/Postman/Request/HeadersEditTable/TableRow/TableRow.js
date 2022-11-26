import TextField from "../../../../TextField/TextField.js";
import DeleteIcon from '@mui/icons-material/Delete';

export function TableRow({headerKey, headerValue, onChangeKey, onChangeValue, isNew, onDelete}) {
    return (
        <tr>
            <td>
                <TextField value={headerKey} onChange={e => onChangeKey(e.target.value)}
                           placeholder={isNew ? 'Key' : undefined}/>
            </td>
            <td>
                <TextField value={headerValue} onChange={e => onChangeValue(e.target.value)}
                           placeholder={isNew ? 'Value' : undefined}/>
            </td>
            {
                !isNew &&
                <td>
                    <DeleteIcon/>
                </td>
            }
        </tr>
    );
}
