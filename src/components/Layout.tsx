import childrenType from "../types/childrenType";
import NavBar from "./Navbar";

interface props {
  children: childrenType;
}

export default function Layout({ children }: props) {
  return (
    <>
      <div className="min-w-full min-h-screen bg-gray-700">
        <NavBar />
        {children}
      </div>
    </>
  );
}
