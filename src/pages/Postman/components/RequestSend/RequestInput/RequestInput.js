import TextField from "../../../../../components/TextField/TextField";
import { Button } from "components/Button";

import React from "react";
import { isValidUrl } from "utility";

import "./style.scss";

const DEFAULT_REQUEST_URL = "https://rickandmortyapi.com/api";

export function RequestInput({ disabled, onSendRequest }) {
    const [url, setUrl] = React.useState(DEFAULT_REQUEST_URL);

    return (
        <>
            <TextField
                className={"request__input"}
                onChange={(e) => setUrl(e.target.value)}
                value={url}
            />
            <Button
                className={"request__send"}
                onClick={() => {
                    onSendRequest(url);
                }}
                disabled={disabled || !isValidUrl(url)}
            >
                Send
            </Button>
        </>
    );
}

export default RequestInput;
