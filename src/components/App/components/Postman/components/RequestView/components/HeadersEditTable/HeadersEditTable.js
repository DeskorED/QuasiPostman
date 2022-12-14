import React from "react";
import './style.scss';
import {TableRow} from "./TableRow";

export function HeadersEditTable({headers, setHeaders, setErrors,errors}) {

    let headerKeyRegExp = new RegExp('^[a-zA-Z0-9_-]*$');
    let headerValueRegExp = new RegExp('^[a-zA-Z0-9_:;.,\\\\/"\'?!(){}\\[\\]@<>=\\-+*#$&`|~^% ]*$');

    function updateHeaders(index, key, value) {
        const newHeaders = [...headers];
        newHeaders[index].key = key;
        newHeaders[index].value = value;
        setHeaders(newHeaders);
        const newErrors = [...errors];
        newErrors[index].key = !headerKeyRegExp.test(key);
        newErrors[index].value = !headerValueRegExp.test(value);
        setErrors(newErrors);
    }

    function deleteRow(index) {
        const newHeaders = [...headers];
        newHeaders.splice(index, 1)
        setHeaders(newHeaders);
        const newErrors = [...errors];
        newErrors.splice(index, 1)
        setErrors(newErrors);
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
                error={errors[index]}
                onChangeValue={newValue => {
                    updateHeaders(index, key, newValue);
                }}
                onDeleteRow={() => deleteRow(index)}
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
                const newErrors = [...errors];
                newErrors.push({key: !headerKeyRegExp.test(newKey), value: false});
                setErrors(newErrors);
            }}
            onChangeValue={newValue => {
                const newHeaders = [...headers];
                newHeaders.push({key: '', value: newValue});
                setHeaders(newHeaders);
                const newErrors = [...errors];
                newErrors.push({key: false, value: !headerValueRegExp.test(newValue)});
                setErrors(newErrors);
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