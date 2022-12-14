import "./style.scss"
import React from "react";
import {HeaderTabelRow} from "./HeaderTabelRow";

export function ResponseHeaders({responseHeaders}) {
    function tableMaker() {
        let table = [];
        if (responseHeaders) {
            let index = 0;
            for (let [key, value] of Object.entries(responseHeaders)) {
                table.push(<HeaderTabelRow
                    key={index++}
                    headerKey={key}
                    headerValue={value}/>);
            }
        }
        return table;
    }

    return <table className="headerTable">
        <tbody>
            {tableMaker()}
        </tbody>
    </table>
}