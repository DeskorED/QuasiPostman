import TextField from "../../../../../../components/TextField/TextField";
import "./style.scss";

export function HeaderTableRow({ headerKey, headerValue }) {
    return (
        <tr>
            <td className={"headerTd"}>
                <TextField
                    className={"headerField"}
                    value={headerKey}
                    readOnly={true}
                />
            </td>
            <td className={"headerTd"}>
                <TextField
                    className={"headerField"}
                    value={headerValue}
                    readOnly={true}
                />
            </td>
        </tr>
    );
}
