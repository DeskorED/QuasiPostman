import TextField from "../../../../TextField/TextField.js";
import "./style.scss"
import DeleteIcon from '@mui/icons-material/Delete';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';

export function TableRow(
    {
        headerKey,
        headerValue,
        onChangeKey,
        onChangeValue,
        isNew,
        onDeleteRow,
        error
    }) {

    return (
        <tr>
            <td className={"headerTd"}>
                <TextField className={"headerField"}
                           value={headerKey}
                           onChange={e =>
                               onChangeKey(e.target.value)
                           }
                           placeholder={isNew ? 'Key' : null}
                />
                {error && error.key && <div className={"errorIcon"}> <ReportGmailerrorredIcon ></ReportGmailerrorredIcon></div>}
            </td>
            <td className={"headerTd"}>
                <TextField className={"headerField"}
                           value={headerValue}
                           onChange={e =>
                               onChangeValue(e.target.value)
                           }
                           placeholder={isNew ? 'Value' : null}
                />
                {error && error.value &&  <div className={"errorIcon"}> <ReportGmailerrorredIcon ></ReportGmailerrorredIcon></div>}
            </td>
            {!isNew && <td className={"deleteTd"}>
                <DeleteIcon onClick={() => {
                    onDeleteRow();
                }}/>
            </td>}
        </tr>
    );
}
