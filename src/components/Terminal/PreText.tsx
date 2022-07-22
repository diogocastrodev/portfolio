import childrenType from "@src/types/childrenType";

interface props {
  children: childrenType;
}

export default function PreText({ children }: props) {
  return (
    <>
      <div className="flex flex-row w-full">
        <span className="mr-2">{"castro - % "}</span>
        {children}
      </div>
    </>
  );
}
