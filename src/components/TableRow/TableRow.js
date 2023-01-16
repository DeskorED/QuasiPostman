import { TextField } from "../TextField";

import DeleteIcon from "@mui/icons-material/Delete";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";

import "./style.scss";

export function TableRow({
    id,
    defaultAlign,
    headerKey,
    headerValue,
    onChangeKey,
    onChangeValue,
    onDeleteRow,
    errors,
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
                {errors?.find((error) => error.id === id)?.key === true && (
                    <div className={"error-icon"}>
                        {" "}
                        <ReportGmailerrorredIcon></ReportGmailerrorredIcon>
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
                {errors?.find((error) => error.id === id)?.value === true && (
                    <div className={"error-icon"}>
                        {" "}
                        <ReportGmailerrorredIcon></ReportGmailerrorredIcon>
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
