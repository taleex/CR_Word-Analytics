import { useState } from "react";
import Warning from "./Warning";

export default function TextArea() {
  const [text, setText] = useState("");
  const [showWarning, setShowWarning] = useState(false);

  const handleTextChange = (e) => {
    let newText = e.target.value;

    if (newText.includes("<script>")) {
      setShowWarning(true);
      newText = newText.replace("<script>", "");
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
      {showWarning ? <Warning /> : null}
    </div>
  );
}
