import React from "react";
import RequestBar from "./RequestBar";
import {useState} from 'react';

function TypeChanger() {

    const [state, setState] = useState("GET");


    return (
        <div>
            <select value={state}
                    onChange={e => setState(e.target.value)}>
                <option value={"GET"}> GET</option>
                <option value={"POST"}> POST</option>
                <option value={"PUT"}> PUT</option>
                <option value={"PATCH"}> PATCH</option>
                <option value={"DELETE"}> DELETE</option>
                <option value={"CONNECT"}> CONNECT</option>
            </select>
            <RequestBar type={state}/>
        </div>
    )

}

export default TypeChanger