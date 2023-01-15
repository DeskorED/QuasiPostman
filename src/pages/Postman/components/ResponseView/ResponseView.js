import { ResponseBody } from "./ResponseBody";
import { ResponseHeaders } from "./ResponseHeaders";

import { Tabs } from "../../../../constants/Constants";

import React, { useEffect } from "react";

import "./style.scss";
import { Button } from "../../../../components/Button";

export function ResponseView({
  responseHeaders,
  responseBody,
  statusCode,
  requestTime,
}) {
  let [currentTab, setCurrentTab] = React.useState(undefined);
  useEffect(
    () => setCurrentTab(Tabs?.Headers),
    [responseHeaders, responseBody]
  );
  return (
    <div className={"response"}>
      <Button
        disabled={!responseHeaders}
        onClick={() => {
          setCurrentTab(Tabs?.Headers);
        }}
        className={currentTab === Tabs?.Headers ? "selected" : ""}
      >
        {Tabs?.Headers}
      </Button>

      <Button
        disabled={!responseBody}
        onClick={() => {
          setCurrentTab(Tabs?.Body);
        }}
        className={currentTab === Tabs?.Body ? "selected" : ""}
      >
        {Tabs?.Body}
      </Button>

      {responseHeaders && (
        <span className={"metrics"}>
          | Status :<span className={"response-info"}>{statusCode}</span>| Time
          :<span className={"response-info"}>{requestTime} ms</span>|
        </span>
      )}

      {currentTab === Tabs.Headers && (
        <ResponseHeaders responseHeaders={responseHeaders} />
      )}

      {currentTab === Tabs.Body && (
        <ResponseBody
          responseBody={responseBody}
          contentType={responseHeaders["content-type"]}
        />
      )}
    </div>
  );
}
