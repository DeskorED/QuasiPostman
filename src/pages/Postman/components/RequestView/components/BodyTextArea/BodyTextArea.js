import "./style.scss";

export function BodyTextArea({ setRequestBody, requestBody }) {
  return (
    <div>
      <textarea
        className={"request__textarea"}
        onChange={(e) => setRequestBody(e.target.value)}
        value={requestBody}
      ></textarea>
    </div>
  );
}
