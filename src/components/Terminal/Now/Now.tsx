import usePast from "../../../hooks/usePast";
import { FormEvent, useState } from "react";
import PreText from "../PreText";

interface props {}

export default function Now({}: props) {
  const pastState = usePast();
  console.log(pastState.allCommands);
  const [Text, setText] = useState("");
  function handleSumbit(e: FormEvent) {
    e.preventDefault();
    /* TODO: Handle Text to Past Component */
    pastState.addPast(Text);
    setText("");
  }
  return (
    <>
      <PreText>
        <form onSubmit={handleSumbit} className="flex-1">
          <input
            className="bg-transparent focus:outline-none w-full"
            value={Text}
            onChange={(e) => setText(e.target.value)}
          />
        </form>
      </PreText>
    </>
  );
}
