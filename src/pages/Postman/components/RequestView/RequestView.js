import { HeadersEditTable } from "pages/Postman/components/RequestView/components/HeadersEditTable";
import { BodyTextArea } from "components/BodyTextArea";
import { useEffect, useState } from "react";
import { Button } from "components/Button";

import { Tabs } from "constants/Constants";
import { isBodyDisabled } from "utility";

import "./style.scss";

export function RequestView({
    requestHeaders,
    setRequestHeaders,
    requestBody,
    setRequestBody,
    method,
}) {
    let [currentTab, setCurrentTab] = useState(Tabs?.Headers);

    useEffect(() => {
        setCurrentTab(
            currentTab === Tabs?.Body && !isBodyDisabled(method)
                ? Tabs?.Body
                : Tabs?.Headers
        );
    }, [method, currentTab]);

    return (
        <div className={"request"}>
            {
                <Button
                    onClick={() => {
                        setCurrentTab(Tabs?.Headers);
                    }}
                    className={currentTab === Tabs?.Headers ? "selected" : ""}
                >
                    {Tabs?.Headers}
                </Button>
            }
            {
                <Button
                    onClick={() => {
                        setCurrentTab(Tabs?.Body);
                    }}
                    className={currentTab === Tabs?.Body ? "selected" : ""}
                    disabled={isBodyDisabled(method)}
                >
                    {Tabs?.Body}
                </Button>
            }
            {currentTab === "Headers" && (
                <HeadersEditTable
                    requestHeaders={requestHeaders}
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
