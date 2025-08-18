import Stats from "./Stats.";
import TextArea from "./TextArea";
import { useState } from "react";
import {
  INSTAGRAM_MAX_CHARACTERS,
  FACEBOOK_MAX_CHARACTERS,
} from "../lib/constants";

export default function Container() {
  const [text, setText] = useState("");

  const stats = {
    numberOfWords: text.split(/\s+/).filter((word) => word !== "").length,
    numberOfCharacters: text.length,
    IntagramCharactersLeft: INSTAGRAM_MAX_CHARACTERS - text.length,
    FacebookCharactersLeft: FACEBOOK_MAX_CHARACTERS - text.length,
  };

  return (
    <main className="container">
      <TextArea text={text} setText={setText} />
      <Stats stats={stats} />
    </main>
  );
}
