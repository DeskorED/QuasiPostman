import { TableRow } from "../../../../../../components/TableRow";

import React from "react";
import {
  headerKeyRegExp,
  headerValueRegExp,
} from "../../../../../../constants/Constants";

import "./style.scss";
import { getID } from "../../../../../../utility/getID";

export function HeadersEditTable({
  requestHeaders,
  setRequestHeaders,
  setErrors,
  errors,
}) {
  console.log(requestHeaders);
  const onHeaderValueChange = (id, value) => {
    let newHeaders = [...requestHeaders];

    const inArray = newHeaders.find((header) => header.id === id);
    if (inArray) {
      newHeaders = newHeaders.map((header) =>
        header.id === id ? { id, value: value, key: header.key } : header
      );
    } else newHeaders.push({ id, value: value, key: "" });
    setRequestHeaders(newHeaders);
    valueErrorHandler(id, value);
  };

  const valueErrorHandler = (id, value) => {
    const hasError = errors.find((error) => error.id === id);

    const isError = !headerValueRegExp.test(value);

    if (!hasError && !isError) {
      return;
    }
    let newErrors;
    if (hasError && !isError) {
      newErrors = errors.filter((error) => error.id !== id);
    }
    if (!hasError && isError) {
      newErrors = errors.push({ id, key: errors.key, value: true });
    }
    setErrors(newErrors);
  };

  const onKeyValueChange = (id, key) => {
    let newHeaders = [...requestHeaders];

    const inArray = newHeaders.find((header) => header.id === id);
    if (inArray) {
      newHeaders = newHeaders.map((header) =>
        header.id === id ? { id, value: header.value, key: key } : header
      );
    } else newHeaders.push({ id, value: "", key: key });
    setRequestHeaders(newHeaders);
    keyErrorHandler(id, key);
  };

  const keyErrorHandler = (id, key) => {
    const hasError = errors.find((error) => error.id === id);

    const isError = !headerKeyRegExp.test(key);

    if (!hasError && !isError) {
      return;
    }
    let newErrors;
    if (hasError && !isError) {
      newErrors = errors.filter((error) => error.id !== id);
    }
    if (!hasError && isError) {
      newErrors = errors.push({ id, key: true, value: errors.value });
    }
    setErrors(newErrors);
  };

  function onDeleteRow(id) {
    const newHeaders = [...requestHeaders];
    newHeaders.filter((error) => error.id !== id);
    setRequestHeaders(newHeaders);
  }

  return (
    <table className="headers-edit-table">
      <tbody>
        <tr>
          <th>KEY</th>
          <th>VALUE</th>
        </tr>
        {requestHeaders.map((key, index) => (
          <TableRow
            id={getID()}
            isNew={index === requestHeaders.length - 1}
            headerKey={requestHeaders.key}
            headerValue={requestHeaders.key}
            onDeleteRow={onDeleteRow}
            onChangeValue={onHeaderValueChange}
            onChangeKey={onKeyValueChange}
            errors={errors}
          />
        ))}
      </tbody>
    </table>
  );
}
