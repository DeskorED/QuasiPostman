import { TextField } from "../TextField";

import DeleteIcon from "@mui/icons-material/Delete";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";

import "./style.scss";

export function TableRow({
    id,
    defaultAlign,
    headerKey,
    headerValue,
    keyError,
    valueError,
    onChangeKey,
    onChangeValue,
    onDeleteRow,
}) {
    return (
        <tr>
            <td className={"headers-table__td"}>
                <TextField
                    className={"headers-table__text-field"}
                    value={headerKey ? headerKey : ""}
                    onChange={(e) => onChangeKey(id, e.target.value)}
                    placeholder={defaultAlign ? "Key" : null}
                />
                {keyError && (
                    <div className={"error-icon error-icon_key"}>
                        {" "}
                        <ReportGmailerrorredIcon />
                    </div>
                )}
            </td>
            <td className={"headers-table__td"}>
                <TextField
                    className={"headers-table__text-field"}
                    value={headerValue ? headerValue : ""}
                    onChange={(e) => onChangeValue(id, e.target.value)}
                    placeholder={defaultAlign ? "Value" : null}
                />
                {valueError && (
                    <div className={"error-icon error-icon_value"}>
                        {" "}
                        <ReportGmailerrorredIcon />
                    </div>
                )}
            </td>
            {!defaultAlign && (
                <td className="delete-td">
                    <DeleteIcon onClick={() => onDeleteRow(id)} />
                </td>
            )}
        </tr>
    );
}
