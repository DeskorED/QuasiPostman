import TextField from "../../../../../components/TextField/TextField";
import { Button } from "../../../../../components/Button";

import React from "react";
import { DEFAULT_URL } from "../../../../../constants/Constants";
import { isErrors } from "../../../../../utility/isErrors";

import "./style.scss";

export function RequestInput({ errors, onSendRequest }) {
  const [url, setUrl] = React.useState(DEFAULT_URL);

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
        disabled={isErrors(errors, url)}
      >
        Send
      </Button>
    </>
  );
}

export default RequestInput;
