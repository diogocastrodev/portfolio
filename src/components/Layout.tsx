import childrenType from "../types/childrenType";
import NavBar from "./TopOfTerminal";
import Now from "./Terminal/Now/Now";
import Past from "./Terminal/Past/Past";
import MacOSTop from "./macOSTop";

interface props {
  children?: childrenType;
}

export default function Layout({ children }: props) {
  return (
    <>
      <div className="relative min-w-full min-h-screen max-h-screen max-w-full flex flex-col bg-gray-700 overflow-hidden">
        <MacOSTop />
        <NavBar />
        <div
          className="flex-1 py-1 px-2 text-gray-200 font-firaCode"
          id="terminalText"
        >
          <Past />
          <Now />
        </div>
      </div>
    </>
  );
}
