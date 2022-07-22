interface props {}

export default function NavBar({}: props) {
  function handleRed() {
    alert("Please don't close me :(");
  }

  function handleYellow() {
    alert("Where you going? :(");
  }

  function handleGreen() {
    alert("Already using all my power!");
  }

  return (
    <>
      <div className="h-8 w-screen px-3 flex bg-gray-800 bg-opacity-90 relative">
        <div className="h-full absolute flex flex-row items-center gap-2">
          <div
            className="rounded-full bg-red-400 w-[14px] h-[14px] divButton"
            onClick={handleRed}
          ></div>
          <div
            className="rounded-full bg-yellow-400 w-[14px] h-[14px] divButton"
            onClick={handleYellow}
          ></div>
          <div
            className="rounded-full bg-green-400 w-[14px] h-[14px] divButton"
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
