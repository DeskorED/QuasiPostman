import React from "react";

export function TypeChanger({propMethod, methodChange}) {


    return (
        <span>
            <select value={propMethod}
                    onChange={
                        e => {
                            methodChange(e.target.value)
                        }
                    }>
                <option value={"GET"}> GET</option>
                <option value={"POST"}> POST</option>
                <option value={"PUT"}> PUT</option>
                <option value={"PATCH"}> PATCH</option>
                <option value={"DELETE"}> DELETE</option>
                <option value={"HEAD"}> HEAD</option>
            </select>
        </span>
    )

}