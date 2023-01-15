import { methods } from "../../../../../constants/Constants";

import React from "react";

import "./style.scss";

export function MethodChanger({ requestMethod, setRequestMethod }) {
  return (
    <div>
      <select
        className="method-select"
        value={requestMethod}
        onChange={(e) => {
          setRequestMethod(e.target.value);
        }}
      >
        {Object.keys(methods).map((key, value) => (
          <option key={key} value={value}>
            {key}
          </option>
        ))}
      </select>
    </div>
  );
}
