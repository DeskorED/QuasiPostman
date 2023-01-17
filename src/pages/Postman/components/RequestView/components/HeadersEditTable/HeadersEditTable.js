import { TableRow } from "components/TableRow";

import React from "react";
import { headerKeyRegExp, headerValueRegExp } from "constants/Constants";
import { getID } from "utility/getID";

import "./style.scss";

export function HeadersEditTable({ requestHeaders, setRequestHeaders }) {
    const onKeyChange = (id, key) => {
        let newHeaders = { ...requestHeaders };

        const error = !headerKeyRegExp.test(key);
        newHeaders[id] = { ...newHeaders[id], id, key, keyError: error };

        setRequestHeaders(newHeaders);
    };

    const onValueChange = (id, value) => {
        let newHeaders = { ...requestHeaders };

        const error = !headerValueRegExp.test(value);
        newHeaders[id] = { ...newHeaders[id], id, value, valueError: error };

        setRequestHeaders(newHeaders);
    };

    function onDeleteRow(id) {
        let newHeaders = { ...requestHeaders };

        delete newHeaders[id];

        setRequestHeaders(newHeaders);
    }

    const tableRows = Object.values(requestHeaders).map(
        ({ id, key, value, keyError, valueError }) => (
            <TableRow
                id={id}
                key={id}
                headerKey={key}
                headerValue={value}
                keyError={keyError}
                valueError={valueError}
                onDeleteRow={onDeleteRow}
                onChangeValue={onValueChange}
                onChangeKey={onKeyChange}
            />
        )
    );

    const newID = getID();
    tableRows.push(
        <TableRow
            id={newID}
            key={newID}
            defaultAlign={true}
            onChangeValue={onValueChange}
            onChangeKey={onKeyChange}
        />
    );

    return (
        <table className="headers-edit-table">
            <tbody>
                <tr>
                    <th>KEY</th>
                    <th>VALUE</th>
                </tr>
                {tableRows}
            </tbody>
        </table>
    );
}
