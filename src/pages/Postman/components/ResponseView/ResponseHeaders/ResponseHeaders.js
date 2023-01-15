import { TableRow } from "../../../../../components/TableRow";

import React from "react";

import "./style.scss";

export function ResponseHeaders({ responseHeaders }) {
  return (
    <table className="headers-table">
      <tbody>
        {responseHeaders &&
          responseHeaders.map((key, value, index) => (
            <TableRow
              isNew={true}
              key={index}
              headerKey={key}
              headerValue={value}
            />
          ))}
      </tbody>
    </table>
  );
}
