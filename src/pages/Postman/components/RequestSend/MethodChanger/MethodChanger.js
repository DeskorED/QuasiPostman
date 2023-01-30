import { HTTPmethods } from "constants/Constants";

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
                {Object.keys(HTTPmethods).map((key) => (
                    <option key={key} value={HTTPmethods[key]}>
                        {key}
                    </option>
                ))}
            </select>
        </div>
    );
}
