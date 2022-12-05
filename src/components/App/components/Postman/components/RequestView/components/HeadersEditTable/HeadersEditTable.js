import React from "react";
import './style.scss';
import {TableRow} from "./TableRow";

export function HeadersEditTable({headers, setHeaders}) {

    function updateHeaders(index, key, value) {
        const newHeaders = [...headers];
        newHeaders[index].key = key;
        newHeaders[index].value = value;
        setHeaders(newHeaders);
    }

    function deleteRow(index) {
        const newHeaders = [...headers];
        newHeaders.splice(index, 1)
        setHeaders(newHeaders);
    }

    function tableMaker() {
        let table = [];

        headers.map(({key, value}, index) => {
            table.push(<TableRow
                index={index}
                key={index}
                headerKey={key}
                headerValue={value}
                onChangeKey={newKey => {
                    updateHeaders(index, newKey, value);
                }}
                onChangeValue={newValue => {
                    updateHeaders(index, key, newValue);
                }}
                onDeleteRow={deleteRow}
            />);
        });

        table.push(<TableRow
            key={headers.length}
            headerKey={''}
            headerValue={''}
            onChangeKey={newKey => {
                const newHeaders = [...headers];
                newHeaders.push({key: newKey, value: ''});
                setHeaders(newHeaders);
            }}
            onChangeValue={newValue => {
                const newHeaders = [...headers];
                newHeaders.push({key: '', value: newValue});
                setHeaders(newHeaders);
            }}
            isNew
        />);
        return table;
    }

    return (<table className="headerTable">
        <tbody>
        <tr>
            <th>KEY</th>
            <th>VALUE</th>
        </tr>
        {tableMaker()}
        </tbody>
    </table>);
}