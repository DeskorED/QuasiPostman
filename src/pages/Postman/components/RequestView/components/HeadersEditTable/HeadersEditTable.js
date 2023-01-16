import { TableRow } from "../../../../../../components/TableRow";

import React from "react";
import { getID } from "../../../../../../utility/getID";
import { keyErrorHandler } from "../../../../../../utility/keyErrorHandler";
import { valueErrorHandler } from "../../../../../../utility/valueErrorHandler";

import "./style.scss";

export function HeadersEditTable({
    requestHeaders,
    setRequestHeaders,
    setErrors,
    errors,
}) {
    const onHeaderValueChange = (id, value) => {
        let newHeaders = [...requestHeaders];

        const inArray = newHeaders.find((header) => header.id === id);
        if (inArray) {
            newHeaders = newHeaders.map((header) =>
                header.id === id
                    ? { id, value: value, key: header.key }
                    : header
            );
        } else {
            newHeaders.push({ id, value: value, key: "" });
        }
        setRequestHeaders(newHeaders);
        valueErrorHandler(id, value, errors, setErrors);
    };

    const onKeyValueChange = (id, key) => {
        let newHeaders = [...requestHeaders];

        const inArray = newHeaders.find((header) => header.id === id);
        if (inArray) {
            newHeaders = newHeaders.map((header) =>
                header.id === id
                    ? { id, value: header.value, key: key }
                    : header
            );
        } else {
            newHeaders.push({ id, value: "", key: key });
        }
        setRequestHeaders(newHeaders);
        keyErrorHandler(id, key, errors, setErrors);
    };

    let newID = getID();

    function onDeleteRow(id) {
        let newHeaders = [...requestHeaders];
        newHeaders = newHeaders.filter((header) => header.id !== id);
        setRequestHeaders(newHeaders ? newHeaders : []);
    }

    const tableRows = requestHeaders?.map(({ id, key, value }) => (
        <TableRow
            id={id}
            key={id}
            headerKey={key}
            headerValue={value}
            onDeleteRow={onDeleteRow}
            onChangeValue={onHeaderValueChange}
            onChangeKey={onKeyValueChange}
            errors={errors}
        />
    ));

    tableRows.push(
        <TableRow
            id={newID}
            key={newID}
            defaultAlign={true}
            onChangeValue={onHeaderValueChange}
            onChangeKey={onKeyValueChange}
            errors={errors}
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
