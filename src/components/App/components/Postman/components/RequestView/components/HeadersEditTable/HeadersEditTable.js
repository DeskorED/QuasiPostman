import React from "react";
import './style.scss';
import {TableRow} from "./TableRow";

export function HeadersEditTable({myHeaders, setHeaders}) {

    const headers = myHeaders;

    function updateHeaders(index, key, value) {
        const newHeaders = [...headers];
        newHeaders[index].key = key;
        newHeaders[index].value = value;
        setHeaders(newHeaders);
    }

    function tableMaker() {
        let table = [];

        headers.map(({key, value}, index) => {
            table.push(
                <TableRow
                    key={index}
                    headerKey={key}
                    headerValue={value}
                    onChangeKey={newKey => {
                        updateHeaders(index, newKey, value);
                    }}
                    onChangeValue={newValue => {
                        updateHeaders(index, key, newValue);
                    }}/>
            );
        });

        table.push(
            <TableRow
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
            />
        );
        return table;
    }

    return (
        <table className="headerTable">
            <tbody>
            <tr>
                <th>Ключ</th>
                <th>Значение</th>
            </tr>
            {tableMaker()}
            </tbody>
        </table>
    );
}