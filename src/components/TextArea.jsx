import { useState } from "react";
import Warning from "./Warning";

export default function TextArea({ text, setText }) {
  const [warningText, setWarningText] = useState("");

  const handleTextChange = (e) => {
    let newText = e.target.value;

    if (newText.includes("<script>")) {
      setWarningText("No script tags allowed!");
      newText = newText.replace("<script>", "");
    } else if (newText.includes("@")) {
      setWarningText("No @ symbol allowed!");
      newText = newText.replace("@", "");
    } else {
      setWarningText("");
    }
    setText(newText);
  };

  return (
    <div className="textarea">
      <textarea
        onChange={handleTextChange}
        value={text}
        placeholder="Type your text here..."
        spellCheck="false"
      />
      {warningText ? <Warning warningText={warningText} /> : null}
    </div>
  );
}
