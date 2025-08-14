import { useState } from "react";

export default function TextArea() {
  const [text, setText] = useState("");
  return (
    <textarea
      onChange={(e) => {
        const newText = e.target.value;
        setText(newText);
      }}
      value={text}
      className="textarea"
      placeholder="Type your text here..."
      spellCheck="false"
    />
  );
}
