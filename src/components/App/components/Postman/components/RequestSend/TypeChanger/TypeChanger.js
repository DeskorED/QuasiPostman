import React from "react";
import "./style.scss"
export function TypeChanger({propMethod, methodChange}) {


    return (
        <div>
            <select className={"typeSelect"} value={propMethod}
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
        </div>
    )

}