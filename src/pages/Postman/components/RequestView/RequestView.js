import { HeadersEditTable } from "./components/HeadersEditTable";
import { BodyTextArea } from "./components/BodyTextArea";
import { useEffect, useState } from "react";
import { Button } from "../../../../components/Button";

import { Tabs } from "../../../../constants/Constants";

import "./style.scss";

import { isBodyDisabled } from "../../../../utility/isBodyDisabled";

export function RequestView({
  requestHeaders,
  setRequestHeaders,
  requestBody,
  setRequestBody,
  method,
  setErrors,
  errors,
}) {
  let [currentTab, setCurrentTab] = useState(Tabs?.Headers);

  useEffect(() => {
    setCurrentTab(
      currentTab === Tabs?.Body && !isBodyDisabled(method)
        ? Tabs?.Body
        : Tabs?.Headers
    );
  }, [method]);

  return (
    <div className={"request"}>
      {Tabs?.Headers && (
        <Button
          onClick={() => {
            setCurrentTab(Tabs?.Headers);
          }}
          className={currentTab === Tabs?.Headers ? "selected" : ""}
        >
          {Tabs?.Headers}
        </Button>
      )}
      {Tabs?.Headers && (
        <Button
          onClick={() => {
            setCurrentTab(Tabs?.Body);
          }}
          className={currentTab === Tabs?.Body ? "selected" : ""}
          disabled={isBodyDisabled(method)}
        >
          {Tabs?.Body}
        </Button>
      )}
      {currentTab === "Headers" && (
        <HeadersEditTable
          requestHeaders={requestHeaders}
          setErrors={setErrors}
          errors={errors}
          setRequestHeaders={setRequestHeaders}
        />
      )}
      {currentTab === "Body" && (
        <BodyTextArea
          setRequestBody={setRequestBody}
          requestBody={requestBody}
        />
      )}
    </div>
  );
}
