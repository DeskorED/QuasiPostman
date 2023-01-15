import { TextField } from "../TextField";

import DeleteIcon from "@mui/icons-material/Delete";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";

import "./style.scss";

export function TableRow({
  id,
  isNew,
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
          value={headerKey}
          onChange={(e) => onChangeKey(id, e.target.value)}
          placeholder={isNew ? "Key" : null}
        />
        {errors && errors.find((error) => error.key === headerKey) && (
          <div className={"error-icon"}>
            {" "}
            <ReportGmailerrorredIcon></ReportGmailerrorredIcon>
          </div>
        )}
      </td>
      <td className={"headers-table__td"}>
        <TextField
          className={"headers-table__text-field"}
          value={headerValue}
          onChange={(e) => onChangeValue(id, e.target.value)}
          placeholder={isNew ? "Value" : null}
        />
        {errors && errors.find((error) => error.value === headerValue) && (
          <div className={"error-icon"}>
            {" "}
            <ReportGmailerrorredIcon></ReportGmailerrorredIcon>
          </div>
        )}
      </td>
      {!isNew && (
        <td className="delete-td">
          <DeleteIcon onClick={() => onDeleteRow(id)} />
        </td>
      )}
    </tr>
  );
}
