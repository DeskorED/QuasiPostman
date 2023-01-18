import React from "react";

import "./style.scss";

export function TextField({
    placeholder,
    className,
    onChange,
    value,
    readOnly,
}) {
    return (
        <input
            className={className}
            onChange={onChange}
            value={value}
            readOnly={readOnly}
            placeholder={placeholder}
        />
    );
}

export default TextField;
