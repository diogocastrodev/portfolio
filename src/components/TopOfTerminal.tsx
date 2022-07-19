interface props {}

export default function NavBar({}: props) {
  function handleRed() {
    console.log("red");
  }

  function handleYellow() {
    console.log("yellow");
  }

  function handleGreen() {
    console.log("green");
  }

  return (
    <>
      <div className="h-8 w-screen px-3 flex bg-gray-800 relative">
        <div className="h-full absolute flex flex-row items-center gap-2">
          <div
            className="rounded-full bg-red-400 w-4 h-4 cursor-macOSPointer"
            onClick={handleRed}
          ></div>
          <div
            className="rounded-full bg-yellow-400 w-4 h-4 cursor-macOSPointer"
            onClick={handleYellow}
          ></div>
          <div
            className="rounded-full bg-green-400 w-4 h-4 cursor-macOSPointer"
            onClick={handleGreen}
          ></div>
        </div>
        <div className="text-gray-300 w-full flex items-center justify-center">
          ~ Terminal
        </div>
      </div>
    </>
  );
}
