import { FormEvent, useState } from "react";

interface props {}

export default function Now({}: props) {
  const [Text, setText] = useState("");
  function handleSumbit(e: FormEvent) {
    e.preventDefault();
    /* TODO: Handle Text to Past Component */
    setText("");
  }
  return (
    <>
      <div className="flex flex-row w-full">
        <span className="mr-1">{"castro - % "}</span>
        <form onSubmit={handleSumbit} className="flex-1">
          <input
            className="bg-transparent focus:outline-none w-full"
            value={Text}
            onChange={(e) => setText(e.target.value)}
          />
        </form>
      </div>
    </>
  );
}
