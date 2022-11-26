import {RequestSend} from "./RequestSend";
import {Request} from "./Request";
import {Response} from "./Response";

export function Postman(){
    return(
        <>
            <RequestSend />
            <Request/>
            <Response/>
        </>
    )
}