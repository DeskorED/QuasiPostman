import {HeadersEditTable} from "./HeadersEditTable";

export function Request({myHeaders, setHeaders, setBody}){

    return (
        <div className={"request"}>
            <HeadersEditTable
                myHeaders = {myHeaders}
                setHeaders = {setHeaders}
            />
        </div>
    )
}