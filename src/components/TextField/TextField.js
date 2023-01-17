import React from "react";

import "./style.scss";

export function TextField({ className, onChange, value, readOnly }) {
    return (
        <input
            className={className}
            onChange={onChange}
            value={value}
            readOnly={readOnly}
        />
    );
}

export default TextField;
