interface props {}

export default function NavBar(props: props) {
  return (
    <>
      <div className="h-8 w-screen px-3 flex flex-row items-center gap-1 bg-gray-800">
        <div className="rounded-full bg-red-400 w-4 h-4"></div>
        <div className="rounded-full bg-yellow-400 w-4 h-4"></div>
        <div className="rounded-full bg-green-400 w-4 h-4"></div>
      </div>
    </>
  );
}
