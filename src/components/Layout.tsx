import childrenType from "../types/childrenType";
import NavBar from "./TopOfTerminal";
import Now from "./Terminal/Now/Now";
import Past from "./Terminal/Past/Past";
import MacOSTop from "./macOSTop";
import { useEffect } from "react";
import $ from "jquery";
import Introduction from "./Terminal/Introduction/Introduction";

interface props {
  children?: childrenType;
}

export default function Layout({ children }: props) {
  /* Push to end and focus terminalInput */
  useEffect(() => {
    $("#terminalBody").on("click", (e) => {
      const scrollTop = window.scrollY;
      $("#terminalInput").trigger("focus").scrollTop(scrollTop);
    });
  }, []);
  return (
    <>
      <div className="relative min-w-full min-h-screen max-h-screen max-w-full flex flex-col">
        <MacOSTop />
        <NavBar />
        <div
          className="flex-1 py-1 px-2 text-gray-200 font-firaCode overflow-y-auto bg-gray-700 bg-opacity-90"
          id="terminalBody"
        >
          <Introduction />
          <Past />
          <Now />
        </div>
      </div>
    </>
  );
}
