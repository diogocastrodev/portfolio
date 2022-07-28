import usePast from "../../../hooks/usePast";
import { FormEvent, useEffect, useRef, useState } from "react";
import PreText from "../PreText";

interface props {}

export default function Now({}: props) {
  const pastState = usePast();
  const terminalInput = useRef<HTMLInputElement>(null);

  const [Text, setText] = useState("");

  const focusInput = () => {
    terminalInput.current?.scrollIntoView({ behavior: "smooth" });
    terminalInput.current?.focus();
  };

  function handleSumbit(e: FormEvent) {
    e.preventDefault();
    /* TODO: Handle Text to Past Component */
    pastState.addPast(Text);
    setText("");
    // Get the page height and scroll to the bottom
    focusInput();
  }

  useEffect(() => {
    focusInput();
  }, [pastState.Past]);

  return (
    <>
      <PreText>
        <form onSubmit={handleSumbit} className="flex-1">
          <input
            className="bg-transparent focus:outline-none w-full"
            type="text"
            value={Text}
            onChange={(e) => setText(e.target.value)}
            autoComplete="off"
            id="terminalInput"
            ref={terminalInput}
            data-lpignore="true"
          />
        </form>
      </PreText>
    </>
  );
}
