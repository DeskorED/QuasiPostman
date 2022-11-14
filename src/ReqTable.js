import NewInputField from "./NewInputField";
import TableRaw from "./TableRaw";

function ReqTable(props) {
    const response = props.response;
    console.log(response)
    let table = [];
    table.push(<tr key={"Header"}>
        <th>Ключ</th>
        <th>Значение</th>
    </tr>)

    function tableMaker() {
        if (response) {
            for (let [key, value] of Object.entries(response)) {
                table.push(
                    <TableRaw key={key} value={value}/>
                )
            }
        }
        return table;
    }

    function onChangeKey(event) {
        table.push(<tr key={event.target.value}>
        </tr>)
        console.log(table);
    }

    return <table>
        <tbody border="2px solid black">
        {tableMaker()}
        <NewInputField onChangeKey={onChangeKey}/>
        </tbody>
    </table>


}

export default ReqTable